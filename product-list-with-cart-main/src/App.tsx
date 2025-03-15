import "./App.css";
import Main from "./components/Main";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
