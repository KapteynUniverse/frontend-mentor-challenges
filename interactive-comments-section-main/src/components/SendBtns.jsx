const style =
  "bg-blue-modarate text-white hover:opacity-50 col-start-2 row-start-2 md:row-start-1 md:col-start-3";

function ReplyBtn(props) {
  return (
    <button className={style} onClick={props.handleReply}>
      Reply
    </button>
  );
}

function UpdateBtn(props) {
  return (
    <button className={style} onClick={props.handleUpdate}>
      Update
    </button>
  );
}

function SendBtn(props) {
  return (
    <button className={style} onClick={props.handleSend}>
      Send
    </button>
  );
}

export { ReplyBtn, UpdateBtn, SendBtn };
