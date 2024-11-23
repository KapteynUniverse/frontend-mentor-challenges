import ReplyIcon from "/assets/images/icons/icon-reply.svg";
import DeleteIcon from "/assets/images/icons/icon-delete.svg";
import EditIcon from "/assets/images/icons/icon-edit.svg";

function ReplyBtns({ user, commentUser, onDelete, onEdit, onReply }) {
  function handleReply() {
    !user ? alert("Log in to reply") : onReply();
  }
  function handleDelete() {
    onDelete();
  }
  function handleEdit() {
    onEdit();
  }

  return (
    <div className="flex items-center justify-end row-start-3 md:col-start-3 md:row-start-1 text-xs sm:text-base">
      {!user || user?.uid !== commentUser ? (
        <button
          disabled={!user}
          className="flex items-center gap-2 disabled:cursor-not-allowed disabled:hover:bg-red-soft hover:opacity-50 disabled:opacity-100"
          onClick={handleReply}
        >
          <img src={ReplyIcon} alt="Click to reply this comment" />
          Reply
        </button>
      ) : (
        user?.uid === commentUser && (
          <>
            <button
              className="flex items-center gap-1 text-red-soft hover:opacity-50 "
              onClick={handleDelete}
            >
              <img src={DeleteIcon} alt="Click to delete this comment" />
              Delete
            </button>
            <button
              className="flex items-center gap-1 text-blue-modarate hover:opacity-50 "
              onClick={handleEdit}
            >
              <img src={EditIcon} alt="Click to edit this comment" />
              Edit
            </button>
          </>
        )
      )}
    </div>
  );
}

export default ReplyBtns;
