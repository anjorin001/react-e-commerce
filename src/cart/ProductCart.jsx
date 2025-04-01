import React, { useContext } from "react";
import Auth from "../auth/Auth";
import GeneralNavbar from "../components/GeneralNavbar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";
import Cart from '../assets/cart-removebg-preview.png'
const ProductCart = () => {
  const { user } = Auth();
  const navigate = useNavigate();
  const { cart, price, totalPrice, productRemove, productIncrease, productDecrease } = useContext(CartContext);
  
  return (
    <div>
      <GeneralNavbar />
      <main className="page-content">
        {cart.products.length > 0 ? (
          <div>
            {cart.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-info">
                  <p>{product.title}</p>
                </div>
                <div className="quantity-controls">
                  {product.quantity > 1 && (
                    <button onClick={() => productDecrease(product.id)}>
                      -
                    </button>
                  )}
                  <span style={{color:'white'}}>{product.quantity || 1}</span>
                  <button onClick={() => productIncrease(product.id)}>+</button>
                </div>
                <div className="price">
                  <span>Price: ${price[product.id] || product.price}</span>
                </div>
                <div className="remove-btn">
                  <button onClick={() => productRemove(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
              <div className="total-price">
                <p>Total:${totalPrice}</p>
              </div>
          </div>
        ) : (
              <div className="no-cart">
                <button onClick={() => navigate('/')}>Fill up Cart</button>
                <div style={{display:'flex'}}>
                  <p>YOU HAVE AN EMPTY CART</p> <img src={Cart} alt="" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                </div> 
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductCart;
