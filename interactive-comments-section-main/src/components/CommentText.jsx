function CommentText(props) {
  const { reply, to, comment } = props;

  return (
    <p className="col-span-2 text-blue-grayish">
      {reply ? (
        <a tabIndex={-1} className="text-blue-modarate" href={to}>
          {to}
        </a>
      ) : null}
      {reply ? " " : ""}
      {comment}
    </p>
  );
}

export default CommentText;
