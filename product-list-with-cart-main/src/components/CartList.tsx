import deleteBtn from "/assets/images/icons/icon-remove-item.svg";
import { useCart } from "../hooks/useCart";

interface CartListProps {
  showButton: boolean;
}
const CartList = ({ showButton }: CartListProps) => {
  const { cart, handleRemove } = useCart();

  return cart.map((item) => (
    <li
      key={item.name}
      className={`cart-item-info ${!showButton ? "modal-item" : ""}`}
    >
      {!showButton ? (
        <img
          src={item.image}
          alt=""
          height={50}
          width={50}
          className="thumbnail-img"
        />
      ) : (
        <button
          onClick={() => handleRemove(item)}
          aria-label={`Remove ${item.name} from cart`}
          className="remove-btn"
        >
          <img src={deleteBtn} alt="" height={10} width={10} />
        </button>
      )}
      <div>
        <h3 className="cart-item-name">{item.name}</h3>
        <dl className="cart-item-prices">
          <dt className="sr-only">Quantity</dt>
          <dd aria-live="polite">
            {item.quantity}
            <span aria-hidden="true">x</span>
          </dd>
          <dt className="sr-only">Price</dt>
          <dd>
            <span aria-hidden="true">@ $</span>
            {item.price.toFixed(2)}
          </dd>
          {showButton && (
            <>
              <dt className="sr-only">Total Price of {item.name}</dt>
              <dd aria-live="polite">
                <strong>
                  <span aria-hidden="true">$</span>
                  {(item.quantity * item.price).toFixed(2)}
                </strong>
              </dd>
            </>
          )}
        </dl>
      </div>
      {!showButton && (
        <dl className="modal-item-price">
          <dt className="sr-only">Total Price of {item.name}</dt>
          <dd aria-live="polite">
            <strong>
              <span aria-hidden="true">$</span>
              {(item.quantity * item.price).toFixed(2)}
            </strong>
          </dd>
        </dl>
      )}
    </li>
  ));
};

export default CartList;
