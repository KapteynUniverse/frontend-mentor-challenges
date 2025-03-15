import Cart from "../components/Cart";
import Products from "../components/Products";

import Modal from "./Modal";

const Main = () => {
  return (
    <main>
      <h1 className="sr-only">Product List With Cart</h1>
      <section aria-labelledby="product-type" className="product-section">
        <h2 id="product-type" className="product-type">Desserts</h2>
        <ul className="products" role="list">
          <Products />
        </ul>
      </section>
      <Cart />
      <Modal />
    </main>
  );
};

export default Main;
