import { useState, useRef, useEffect } from "react";
import ProfileImage from "./ProfileImage";
import { ReplyBtn, UpdateBtn, SendBtn } from "./SendBtns";
import useAuth from "../hooks/user";
import { addData, addReply, UpdateScore } from "../hooks/manipulateData";
import { Timestamp } from "firebase/firestore";

function TextSection(props) {
  const usercredentials = useAuth();

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setMessage(inputValue);
    setMessageLength(inputValue.length);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (props.btn === "update") {
      props.handleUpdate(message);
    }
  }

  // const [message, setMessage] = useState();
  const [message, setMessage] = useState(
    props.commentText || "")
  );
  const [messageLength, setMessageLength] = useState(
    props.commentText?.length || 0
  );

  function handleSend() {
    const time = Timestamp.fromDate(new Date());
    addData(
      message,
      usercredentials.uid,
      usercredentials.name,
      usercredentials.photoURL,
      time
    );
    setMessage("");
    setMessageLength(0);
  }

  function handleReply() {
    const isComment = props.isComment;
    const time = Timestamp.fromDate(new Date());

    if (isComment) {
      // Replying to a comment
      addReply(
        props.id, // Comment ID
        message,
        usercredentials.uid,
        usercredentials.name,
        usercredentials.photoURL,
        time,
        props.replyTo,
        true // Set isComment to true (indicating this is a comment)
      );
    } else {
      // Replying to a reply
      addReply(
        {
          commentId: props.commentId, // The comment ID
          replyId: props.id, // The reply ID you're replying to
        },
        message,
        usercredentials.uid,
        usercredentials.name,
        usercredentials.photoURL,
        time,
        props.replyTo,
        false // Set isComment to false (indicating this is a reply to a reply)
      );
    }
    setMessageLength(0);
    setMessage(""); // Clear the message after sending the reply
  }

  function handleUpdate() {
    UpdateScore(props.id, props.score, message);
    setMessageLength(message.length);
  }

  // Resize textarea based on the message

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height before adjusting
    textarea.style.height = `${textarea.scrollHeight + 24}px`; // Adjust height to fit content
  }, [message]);

  return (
    <form
      id={props.id ? props.id : "form"}
      onInput={handleInputChange}
      onSubmit={handleSubmit}
      action="post"
      className={`bg-white grid grid-cols-[2fr_1fr] items-center gap-4 p-4 md:grid-cols-[1fr_7fr_2fr] md:items-start transition-[outline] duration-1000 ease-in-out outline-none target:outline-pink-500 target:outline-4 rounded-lg ${props.style}`}
    >
      <div className="relative w-full col-span-2 md:col-start-2 md:row-start-1 md:col-span-1">
        <label htmlFor="textarea" className="sr-only">
          Add a comment:
        </label>
        <textarea
          ref={textareaRef}
          id="textarea"
          value={message}
          placeholder="Add a comment..."
          className="w-full border-2 hover:cursor-pointer focus:outline-blue-lightgrey resize-none overflow-y-hidden"
          onChange={handleInputChange}
          maxLength={255}
        ></textarea>
        <span
          aria-live="polite"
          className={`absolute bottom-2 right-4 text-sm ${
            messageLength === 255
              ? "text-red-500"
              : messageLength > 0
              ? "text-black"
              : "text-gray-300"
          }`}
        >
          <span className="sr-only">Total written characters:</span>
          {messageLength}
          <span aria-hidden>/</span>
          <span className="sr-only">out of</span>255
        </span>
      </div>
      <ProfileImage
        imgSrc={props.imgSrc}
        imgAlt={`${props.imgAlt} Avatar`}
        style={"col-start-1 row-start-2 md:row-start-1 rounded-full"}
      />
      {props.btn === "reply" ? (
        <ReplyBtn handleReply={handleReply} />
      ) : props.btn === "update" ? (
        <UpdateBtn handleUpdate={handleUpdate} />
      ) : (
        <SendBtn handleSend={handleSend} />
      )}
    </form>
  );
}

export default TextSection;
