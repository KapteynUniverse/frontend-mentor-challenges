import { useEffect, useRef } from "react";
import { useCart } from "../hooks/useCart";
import CartList from "./CartList";
import confirmIcon from "/assets/images/icons/icon-order-confirmed.svg";
const Modal = () => {
  const { isModalOpen, handleModal, totalPrice } = useCart();
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        modalRef.current.showModal();
      } else {
        modalRef.current.close();
      }
    }
  }, [isModalOpen]);
  return (
    <dialog ref={modalRef}>
      <img
        src={confirmIcon}
        alt=""
        width={48}
        height={48}
        className="confirm-icon"
      />
      <h2 className="cart-title">Order Confirmed</h2>
      <p className="dialog-text">We hope you enjoy your food!</p>
      <ul className="cart-item" role="list">
        <CartList showButton={false} />
      </ul>
      <dl className="total-price modal-total-price">
        <dt>Order Total</dt>
        <dd>
          <strong>
            <span aria-hidden="true">$</span>
            {totalPrice.toFixed(2)}
          </strong>
        </dd>
      </dl>
      <button className="confirm-btn" onClick={handleModal} autoFocus>
        Start New Order
      </button>
    </dialog>
  );
};

export default Modal;
