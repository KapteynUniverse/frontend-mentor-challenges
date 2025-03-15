import { useCart } from "../hooks/useCart";
import data from "../data/data.json";
import increase from "/assets/images/icons/icon-increment-quantity.svg";
import decrease from "/assets/images/icons/icon-decrement-quantity.svg";

const Products = () => {
  const { addToCart, handleIncrease, handleDecrease, cart } = useCart();
  return data.map((product, index) => {
    const cartItem = cart.find((item) => item.name === product.name);
    const isInCart = Boolean(cartItem);
    const quantity = cartItem?.quantity || 0;
    return (
      <li key={index}>
        <article>
          <div className={`product-img-container ${isInCart ? "in-cart" : ""}`}>
            <picture className="product-img">
              <source
                srcSet={product.image.desktop}
                media="(min-width: 67.5rem)"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 48rem)"
              />
              <img src={product.image.mobile} alt={product.name} />
            </picture>
            <div aria-live="polite">
              {!isInCart ? (
                <button
                  className="product-btn add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart <span className="sr-only">{product.name}</span>
                </button>
              ) : (
                <div className="in-cart-btn product-btn">
                  <button
                    onClick={() => handleDecrease(product)}
                    aria-label={`Decrease quantity of ${product.name}`}
                    autoFocus
                  >
                    <img src={decrease} alt="" width={10} height={10} />
                  </button>
                  <p aria-live="polite">
                    <span className="sr-only">Quantity </span>
                    {quantity}
                  </p>
                  <button
                    onClick={() => handleIncrease(product)}
                    aria-label={`Increase quantity of ${product.name}`}
                  >
                    <img src={increase} alt="" width={10} height={10} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="product-info">
            <p className="product-category">{product.category}</p>
            <h3 className="product-name">{product.name}</h3>
            <strong className="product-price">
              <span aria-hidden="true">$</span>
              {product.price.toFixed(2)} <span className="sr-only">USD</span>
            </strong>
          </div>
        </article>
      </li>
    );
  });
};

export default Products;
