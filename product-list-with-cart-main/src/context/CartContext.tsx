import { createContext, ReactNode, useState, useMemo } from "react";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: {
    name: string;
    price: number;
    image: { thumbnail: string };
  }) => void;
  handleIncrease: (product: { name: string }) => void;
  handleDecrease: (product: { name: string }) => void;
  handleRemove: (product: { name: string }) => void;
  totalPrice: number;
  handleModal: () => void;
  isModalOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  // const [totalPrice, setTotalPrice] = useState<number>(0);

  // useEffect(() => {
  //   const newTotalPrice = cart.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  //   setTotalPrice(newTotalPrice);
  // }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const addToCart = (product: {
    name: string;
    price: number;
    image: { thumbnail: string };
  }) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: product.name,
        quantity: 1,
        price: product.price,
        image: product.image.thumbnail,
      },
    ]);
  };

  const handleIncrease = (product: { name: string }) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === product.name);
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };
      return updatedCart;
    });
  };

  const handleDecrease = (product: { name: string }) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === product.name);

      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
        return updatedCart;
      }
      return updatedCart.filter((_, i) => i !== index);
    });
  };

  const handleRemove = (product: { name: string }) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === product.name);
      const updatedCart = [...prevCart];
      return updatedCart.filter((_, i) => i !== index);
    });
  };

  const handleModal = () => {
    setModalOpen(!isModalOpen);
    if (isModalOpen) {
      setTimeout(() => {
        setCart([]);
      }, 500);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        handleIncrease,
        handleDecrease,
        handleRemove,
        totalPrice,
        handleModal,
        isModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
