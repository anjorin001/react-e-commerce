import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0,
    discount: 0,
  });
  const [price, setPrice] = useState({});
  const totalPrice = Object.values(price).reduce(
    (sum, value) => sum + value,
    0
  );

  const Newcart = async (productId) => {
    if (!productId) return;
    const productExist = cart.products.some((product) => product.id === productId);
    if (productExist) {
      toast.error("This product is already in your cart!", {
        style: { background: "#6e091b", color: "#fff" },
        progressStyle: { background: "#db082e" },
      });
      return;
    } else {
      toast.success("Product added to cart successfully!", {
        style: { background: "#89061e", color: "#fff" },
        progressStyle: { background: "#db082e" },
      });
    }
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setCart((prev) => ({
        products: [...prev.products, data],
        totalPrice,
        discount: prev.discount,
      }));
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  useEffect(() => {
    if (Object.keys(price).length > 0) {
      setCart((prev) => ({
        ...prev,
        totalPrice,
      }));
    }
  }, [price]);

  useEffect(() => {
    Newcart();
  }, []);
  useEffect(() => {
    if (cart.products.length > 0) {
      localStorage.setItem("CartStore", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("CartStore"));

    if (
      storedCart &&
      storedCart.products.length > 0 &&
      cart.products.length === 0
    ) {
      setCart(storedCart);
    }
  }, []);

  // Ensure every product has a quantity field (default to 1 if missing)
  useEffect(() => {
    const updatedPrices = {};
    cart.products.forEach((product) => {
      const productQuantity = product.quantity || 1;
      updatedPrices[product.id] = product.price * productQuantity;
    });
    setPrice(updatedPrices);
  }, [cart.products]);

  // Increase product quantity
  const productIncrease = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      ),
    }));
  };

  // Decrease product quantity
  const productDecrease = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }));
  };

  // Remove product from cart
  const productRemove = (productId) => {
    setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
        products: prevCart.products.filter(
          (product) => product.id !== productId
        ),
      };
      localStorage.setItem("CartStore", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          Newcart,
          cart,
          setCart,
          price,
          totalPrice,
          productRemove,
          productIncrease,
          productDecrease,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
