import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ErrorImage from "../assets/error-removebg-preview.png";
import GeneralNavbar from "../components/GeneralNavbar";
import { useContext } from "react";
import { CartContext } from "../cart/cartContext";
const ProductDetaile = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const { Newcart } = useContext(CartContext);
  console.log(productId);
  console.log(selectedProduct);
  const fetchProductDetail = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setSelectedProduct(resp.data);
    } catch (error) {
      setError(`ERROR: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return (
      <>
        <div className="Lcont">
          <div className="loader"></div>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <p className="Error-message">
          {error}{" "}
          <img
            src={ErrorImage}
            alt="errorImage"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </p>
      </>
    );
  }
  const handleCart = async (e, productId) => {
    e.preventDefault();
    const cart = await Newcart(productId);
    if (cart) alert(`product ${productId}  is added to cart`);
  };
  return (
    <div className="PD-container">
      <GeneralNavbar />
      <div className="PD-info-container">
        <div className="left-hand">
          <img src={selectedProduct?.thumbnail} alt={selectedProduct?.title} />
        </div>

        {/* Right-hand: Product Details */}
        <div className="right-hand">
          <h1 className="PD-title">{selectedProduct?.title}</h1>
          <p className="PD-category">{selectedProduct?.category}</p>

          <div className="PD-price-section">
            <p className="PD-discounted-price">
              $
              {(
                selectedProduct?.price *
                (1 - selectedProduct?.discountPercentage / 100)
              ).toFixed(2)}
            </p>
            <p className="PD-original-price">${selectedProduct?.price}</p>
          </div>

          {selectedProduct?.brand && (
            <p className="PD-brand">Brand: {selectedProduct?.brand}</p>
          )}
          <p className="PD-stock">
            <b>Avalability: </b>
            {selectedProduct?.availabilityStatus}
          </p>
          <p className="PD-sku">SKU: {selectedProduct?.sku}</p>

          <p className="PD-description">{selectedProduct?.description}</p>

          <p className="PD-dimensions">
            Dimensions: {selectedProduct?.dimensions.width}cm x{" "}
            {selectedProduct?.dimensions.height}cm x{" "}
            {selectedProduct?.dimensions.depth}cm
          </p>

          <p className="PD-warranty">
            Warranty: {selectedProduct?.warrantyInformation}
          </p>
          <p className="PD-shipping">
            Shipping: {selectedProduct?.shippingInformation}
          </p>

          <p className="PD-return-policy">{selectedProduct?.returnPolicy}</p>

          <div className="PD-rating">⭐ {selectedProduct?.rating} / 5</div>

          <div className="PD-reviews">
            <h3>Customer Reviews</h3>
            {selectedProduct?.reviews.map((review, index) => (
              <div key={index} className="PD-review">
                <p>
                  <strong>{review.reviewerName}</strong> - ⭐ {review.rating}
                </p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>

          {/*  Buttons */}
          <div className="PD-actions">
            <button
              className="PD-buy"
              onClick={(e) => handleCart(e, selectedProduct?.id)}
            >
              Buy Now
            </button>
            <button
              className="PD-add-to-cart"
              onClick={(e) => handleCart(e, selectedProduct?.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetaile;
