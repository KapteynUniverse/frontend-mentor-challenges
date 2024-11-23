import { formatDistanceToNow } from "date-fns";
import ProfileSection from "./ProfileSection";
import CommentText from "./CommentText";
import LikeBtns from "./LikeBtns";
import ReplyBtns from "./ReplyBtns";
import TextSection from "./TextSection";
import Modal from "./Modal";
import SignUp from "./SingUp";
import useAuth from "../hooks/user";
import useComments from "../hooks/getDoc";
import { useState } from "react";
import { deleteComment } from "../hooks/manipulateData";
import SkipToComment from "./SkipToComment";

const formatRelativeTime = (timestamp) => {
  const date = timestamp.toDate();
  return formatDistanceToNow(date, { addSuffix: true });
};

function Home() {
  const isUserLogged = useAuth();
  const comments = useComments();

  // Open modal, delete comment and close modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleOpenModal = (commentId) => {
    setSelectedCommentId(commentId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCommentId(null);
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    deleteComment(selectedCommentId);
    handleCloseModal();
  };

  // Edit/delete comment
  const [editId, setEditId] = useState(null);
  // const [editComment, setEditComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleEdit = (commentId, currentText) => {
    setEditId(commentId);
    setCommentText(currentText);
  };

  const handleUpdate = (newText) => {
    setEditId(null);
  };

  // Reply to comment

  const [isReplying, setReplying] = useState(null);

  const handleReply = (commentId) => {
    setReplying(commentId === isReplying ? null : commentId);
  };

  return (
    <main className="flex flex-col gap-4 p-4 load">
      <h1 className="sr-only">Interactive Comment Section</h1>
      <SkipToComment />
      {comments.map((comment, index) => (
        <div
          key={index}
          id={comment.user.uid + index}
          className="bg-white grid grid-cols-2 gap-4 p-4 md:grid-cols-[1fr_7fr_2fr] max-w-3xl rounded-lg"
        >
          <ProfileSection
            imgSrc={comment.user.photoURL}
            imgAlt={`${comment.user.displayName} Avatar`}
            name={comment.user.displayName}
            date={formatRelativeTime(comment.createdAt)}
            user={isUserLogged ? isUserLogged : false}
            commentUserId={comment.user.displayName}
          />
          {editId === comment.id ? (
            <TextSection
              imgSrc={isUserLogged.photoURL}
              imgAlt={isUserLogged.name}
              btn="update"
              style="col-span-2"
              id={comment.id}
              score={comment.score}
              commentText={comment.text}
              handleUpdate={handleUpdate}
            />
          ) : (
            <CommentText to={""} comment={comment.text} reply={false} />
          )}
          <LikeBtns
            user={isUserLogged}
            id={comment.id}
            score={comment.score}
            text={comment.text}
          />
          <ReplyBtns
            user={isUserLogged}
            commentUser={comment.user.uid}
            onDelete={() => handleOpenModal(comment.id)}
            onEdit={() => handleEdit(comment.id, comment.text)}
            onReply={() => handleReply(comment.id)}
          />

          {isReplying === comment.id ? (
            <TextSection
              id={comment.id}
              isComment={true}
              imgSrc={isUserLogged.photoURL}
              imgAlt={isUserLogged.name}
              replyTo={comment.user.displayName}
              btn="reply"
              style={"col-span-2 md:col-span-3 border-t-[1rem]"}
            />
          ) : null}

          {comment.replies?.length > 0 && (
            <div className="pl-4 ml-6 border-l border-gray-light col-span-3 ">
              {comment.replies.map((reply, index) => (
                <div
                  key={index}
                  id={comment.user.uid + index}
                  className="grid grid-cols-2 gap-4 p-4 md:grid-cols-[1fr_7fr_2fr] max-w-3xl"
                >
                  <ProfileSection
                    imgSrc={reply.user.photoURL}
                    imgAlt={`${reply.user.displayName} Avatar`}
                    name={reply.user.displayName}
                    date={formatRelativeTime(reply.createdAt)}
                    user={isUserLogged ? isUserLogged : false}
                    commentUserId={reply.user.displayName}
                  />

                  {editId === reply.id ? (
                    <TextSection
                      imgSrc={isUserLogged.photoURL}
                      imgAlt={isUserLogged.name}
                      btn="update"
                      style="col-span-2"
                      id={reply.id}
                      score={reply.score}
                      commentText={reply.text}
                      handleUpdate={handleUpdate}
                    />
                  ) : (
                    <CommentText
                      to={reply.replyTo}
                      comment={reply.text}
                      reply={true}
                    />
                  )}
                  <LikeBtns
                    user={isUserLogged}
                    id={reply.id}
                    score={reply.score}
                    text={reply.text}
                  />
                  <ReplyBtns
                    user={isUserLogged}
                    commentUser={reply.user.uid}
                    onDelete={() => handleOpenModal(reply.id)}
                    onEdit={() => handleEdit(reply.id, reply.text)}
                    onReply={() => handleReply(reply.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {isUserLogged ? (
        <TextSection
          imgSrc={isUserLogged.photoURL}
          imgAlt={isUserLogged.name}
          btn="send"
        />
      ) : (
        <SignUp />
      )}
      <Modal
        isOpen={isModalOpen}
        onCancel={handleCloseModal}
        onConfirm={handleDeleteConfirm}
      />
    </main>
  );
}

export default Home;
