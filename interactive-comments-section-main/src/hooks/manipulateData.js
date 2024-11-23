import { db } from "../config/firebase";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const addData = async (message, uid, name, photoURL, time) => {
  try {
    await addDoc(collection(db, "comments"), {
      text: message,
      createdAt: time,
      user: {
        uid: uid,
        displayName: name,
        photoURL: photoURL,
      },
      score: 0,
    });
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};

const addReply = async (
  parentId,
  message,
  uid,
  name,
  photoURL,
  time,
  replyTo,
  isComment
) => {
  try {
    // Get the correct reference: a sub-collection under `comments` or a nested `replies`
    const parentRef = isComment
      ? collection(db, "comments", parentId, "replies") // Replying to a comment
      : collection(
          db,
          "comments",
          parentId.commentId,
          "replies",
          parentId.replyId,
          "replies"
        ); // Replying to a reply

    await addDoc(parentRef, {
      text: message,
      createdAt: time,
      replyTo: replyTo,
      user: {
        uid: uid,
        displayName: name,
        photoURL: photoURL,
      },
      score: 0,
    });
  } catch (error) {
    console.error("Error adding reply: ", error);
  }
};

const UpdateScore = async (docId, newScore, newText) => {
  try {
    const docRef = doc(db, "comments", docId);

    await updateDoc(docRef, {
      score: newScore,
      text: newText,
    });
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

async function deleteComment(commentId) {
  try {
    const commentRef = doc(db, "comments", commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}

export { addData, addReply, UpdateScore, deleteComment };
