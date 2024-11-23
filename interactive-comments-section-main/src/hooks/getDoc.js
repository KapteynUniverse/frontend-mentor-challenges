import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// Get comments in real-time

const useComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsRef = collection(db, "comments");
    const order = query(commentsRef, orderBy("createdAt", "asc"));

    // Keep track of reply listeners for cleanup
    const unsubscribeRepliesMap = new Map();

    const unsubscribeComments = onSnapshot(order, (querySnapshot) => {
      const commentsData = [];

      querySnapshot.forEach((doc) => {
        const comment = { id: doc.id, ...doc.data(), replies: [] };

        // Clear any existing replies listener for this comment
        if (unsubscribeRepliesMap.has(doc.id)) {
          unsubscribeRepliesMap.get(doc.id)();
        }

        // Fetch replies for the current comment
        const repliesRef = collection(db, "comments", doc.id, "replies");
        const repliesQuery = query(repliesRef, orderBy("createdAt", "asc"));

        const unsubscribeReplies = onSnapshot(
          repliesQuery,
          (repliesSnapshot) => {
            const repliesData = [];
            repliesSnapshot.forEach((replyDoc) => {
              repliesData.push({ id: replyDoc.id, ...replyDoc.data() });
            });
            // Update the replies of the specific comment
            setComments((prev) =>
              prev.map((c) =>
                c.id === comment.id ? { ...c, replies: repliesData } : c
              )
            );
          }
        );

        // Store the unsubscribe function for this comment's replies
        unsubscribeRepliesMap.set(doc.id, unsubscribeReplies);

        commentsData.push(comment);
      });

      setComments(commentsData);
    });

    // Cleanup: Unsubscribe from all listeners on unmount
    return () => {
      unsubscribeComments();
      unsubscribeRepliesMap.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  return comments;
};

export default useComments;
