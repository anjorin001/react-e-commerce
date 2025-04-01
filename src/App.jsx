import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetaile from "./pages/ProductDetaile";
import CartProvider from "./cart/cartContext";
import LogIn from "./components/LogIn";
import Dashboard from "./pages/Dashboard";
import Authentication from "./auth/AuthContext";
import About from "./pages/About";
import { CategoryProvider } from "./components/CategoryContext";
import ProductCart from "./cart/ProductCart";
import ToastNotification from "./components/ToastNotification";
const App = () => {
  return (
    <>
      <CategoryProvider>
        <Authentication>
          <CartProvider>
            <ToastNotification
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              toastStyle={{ backgroundColor: "#6e091b", color: "#fff" }}
              progressStyle={{ background: "#db082e" }}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/productdetail/:productId"
                element={<ProductDetaile />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<ProductCart />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </CartProvider>
        </Authentication>
      </CategoryProvider>
    </>
  );
};

export default App;
