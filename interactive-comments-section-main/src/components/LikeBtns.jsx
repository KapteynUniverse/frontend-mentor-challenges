import Plus from "/assets/images/icons/icon-plus.svg";
import Minus from "/assets/images/icons/icon-minus.svg";
import { useState } from "react";
import { UpdateScore } from "../hooks/manipulateData";

function LikeBtns(props) {
  const [like, setLike] = useState(props.score);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  async function handleIncrement() {
    if (!props.user) {
      alert("Log in to like");
      return;
    }
    if (!isLiked) {
      const newScore = like + 1;
      setLike(newScore);
      setIsLiked(true);
      setIsDisliked(false);
      await UpdateScore(props.id, newScore, props.text);
    }
  }

  async function handleDecrement() {
    if (!props.user) {
      alert("Log in to dislike");
      return;
    }
    if (!isDisliked && like > 0) {
      const newScore = like - 1;
      setLike(newScore);
      setIsLiked(false);
      setIsDisliked(true);
      await UpdateScore(props.id, newScore, props.text);
    }
  }

  return (
    <div className="flex bg-gray-light max-w-fit row-start-3 rounded-lg md:row-start-1 md:col-start-1 md:row-span-2 md:flex-col md:self-start text-xs sm:text-base">
      <button
        type="button"
        disabled={isLiked || !props.user}
        className={
          "bg-inherit disabled:cursor-not-allowed disabled:hover:bg-red-soft"
        }
        onClick={handleIncrement}
      >
        <img
          src={Plus}
          alt="Click to like this comment"
          width="11"
          height="11"
        />
      </button>
      <p className="content-center text-center text-blue-modarate">
        {props.score}
      </p>
      <button
        type="button"
        disabled={like < 1 || isDisliked || !props.user}
        className={
          "bg-inherit disabled:cursor-not-allowed disabled:hover:bg-red-soft"
        }
        onClick={handleDecrement}
      >
        <img
          src={Minus}
          alt="Click to dislike this comment"
          width="11"
          height="3"
        />
      </button>
    </div>
  );
}

export default LikeBtns;
