import { useCart } from "../hooks/useCart";
import emptyCart from "/assets/images/icons/illustration-empty-cart.svg";
import carbonNeutral from "/assets/images/icons/icon-carbon-neutral.svg";
import CartList from "./CartList";
import { useEffect, useRef } from "react";

const Cart = () => {
  const { cart, totalPrice, handleModal } = useCart();
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "o") {
        confirmButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section aria-labelledby="cart-title" className="cart">
      <h2 id="cart-title" className="cart-title">
        Your Cart <span aria-hidden="true">({cart.length})</span>
        <span className="sr-only">
          To skip to confirm button press {""}
          <kbd>Alt </kbd> + <kbd>O</kbd>
        </span>
      </h2>
      {cart.length === 0 ? (
        <>
          <img
            src={emptyCart}
            alt=""
            height={128}
            width={128}
            className="cart-img"
          />
          <p className="cart-text">Your added items will appear here</p>
        </>
      ) : (
        <ul className="cart-item" role="list" aria-live="polite">
          <CartList showButton={true} />
        </ul>
      )}
      {cart?.length > 0 && (
        <>
          <dl className="total-price">
            <dt>Order Total</dt>
            <dd aria-live="polite">
              <strong>
                <span aria-hidden="true">$</span>
                {totalPrice.toFixed(2)}
              </strong>
            </dd>
            <dt className="sr-only">Currency</dt>
            <dd className="sr-only">USD</dd>
          </dl>
          <div className="carbon-neutral">
            <img src={carbonNeutral} alt="" width={21} height={20} />
            <p>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button
            ref={confirmButtonRef}
            className="confirm-btn"
            onClick={handleModal}
          >
            Confirm Order
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
