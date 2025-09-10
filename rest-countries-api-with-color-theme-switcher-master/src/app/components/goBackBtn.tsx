"use client";

import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
      aria-label="Go back to the previous page"
      className="px-6 py-2 my-8 rounded-lg cursor-pointer shadow hover:ring-2 hover-element"
    >
      <span aria-hidden className="mr-2 font-bold">
        ←
      </span>{" "}
      Back
    </button>
  );
};
export default GoBackBtn;
