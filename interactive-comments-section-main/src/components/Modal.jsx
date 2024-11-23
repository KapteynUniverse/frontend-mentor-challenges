import { useEffect, useRef } from "react";

function Modal({ isOpen, onCancel, onConfirm }) {
  const dialogRef = useRef(null);
  const firstFocusableElementRef = useRef(null);
  const lastFocusableElementRef = useRef(null);
  const triggerElementRef = useRef(null);

  // Trap focus
  useEffect(() => {
    if (isOpen && !triggerElementRef.current) {
      triggerElementRef.current = document.activeElement;
    }

    if (isOpen) {
      dialogRef.current?.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "center", // Scroll to the center of the screen
      });
      firstFocusableElementRef.current?.focus();
    }

    if (!isOpen && triggerElementRef.current) {
      triggerElementRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElementRef.current) {
          lastFocusableElementRef.current?.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElementRef.current) {
          firstFocusableElementRef.current?.focus();
          event.preventDefault();
        }
      }
    }

    // Not needed but close modal on escape button
    if (event.key === "Escape") {
      onCancel();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 "
        onClick={onCancel}
      ></div>

      <dialog
        ref={dialogRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        aria-modal="true"
        open
        className="max-w-80 top-1/2 p-4 flex flex-col gap-2 rounded-2xl"
        onKeyDown={handleKeyDown}
      >
        <h2 id="modal-title" className="text-blue-dark text-xl">
          Delete comment
        </h2>

        <p id="modal-description" className="text-blue-grayish">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between">
          <button
            ref={firstFocusableElementRef}
            autoFocus
            className="uppercase text-white bg-blue-grayish hover:opacity-50 "
            aria-label="Cancel"
            onClick={onCancel}
          >
            no, cancel
          </button>
          <button
            ref={lastFocusableElementRef}
            className="uppercase text-white bg-red-soft hover:opacity-50 "
            aria-label="Confirm"
            onClick={onConfirm}
          >
            yes, delete
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
