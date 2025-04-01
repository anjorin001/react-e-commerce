import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorImage from "../assets/error-removebg-preview.png";
import { useCategory } from "../components/useCategory";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { useContext } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryParams, categoryProduct, Catgloading, Catgerror } =
    useCategory();
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const { Newcart } = useContext(CartContext);

  const GetProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=200");
      setProducts(res.data?.products);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetProduct();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProduct(filtered);
    } else {
      setFilteredProduct([]);
      setSearch("");
    }
  }, [searchQuery, products]);

  const handleSearch = (search) => {
    setSearchTerm(search);
    if (!search) {
      setSearchParams({});
      setFilteredProduct([]);
    } else {
      setSearchParams({ search: search });
    }
  };

  const handleCart = async (e, productId) => {
    e.preventDefault();
    const cart = await Newcart(productId);
    if (cart) alert(`product ${productId}  is added to cart`);
  };
  return (
    <div className="home-content">
      <div>
      <Navbar GetProduct={GetProduct} setFilteredProduct={setFilteredProduct} />
      </div>
      <div>
      <SearchBar
        onSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />

      {Catgloading && (
        <div className="Lcont">
          <div className="loader"></div>
        </div>
      )}

      {error || Catgerror ? (
        <p className="error-message">
          {error}
          <img
            src={ErrorImage}
            alt="errorImage"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </p>
      ) : loading ? (
        <div className="Lcont">
          <div className="loader"></div>
        </div>
      ) : null}

      {filteredProduct.length > 0 ? (
        <div className="products-grid">
          {filteredProduct.map((product) => (
            <Link
              key={product.id}
              to={`/productdetail/${product.id}`}
              className="product-card"
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-discounted-price">
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
                <p className="product-original-price">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button onClick={(e) => handleCart(e, product.id)}>
                Add to Cart
              </button>
            </Link>
          ))}
        </div>
      ) : categoryParams === "AllProduct" || !categoryParams ? (
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/productdetail/${product.id}`}
              className="product-card"
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-discounted-price">
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
                <p className="product-original-price">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button onClick={(e) => handleCart(e, product.id)}>
                Add to Cart
              </button>
            </Link>
          ))}
        </div>
      ) : (
        <div className="products-grid">
          {categoryProduct.map((selectedCartg) => (
            <Link
              key={selectedCartg.id}
              to={`/productdetail/${selectedCartg.id}`}
              className="product-card"
            >
              <img src={selectedCartg.thumbnail} alt={selectedCartg.title} />
              <div className="product-info">
                <p className="product-title">{selectedCartg.title}</p>
                <p className="product-discounted-price">
                  $
                  {(
                    selectedCartg.price *
                    (1 - selectedCartg.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
                <p className="product-original-price">
                  ${selectedCartg.price.toFixed(2)}
                </p>
              </div>
              <button onClick={(e) => handleCart(e, selectedCartg.id)}>
                Add to Cart
              </button>
            </Link>
          ))}
        </div>
      )}
     </div>
    </div>
  );
};

export default Product;
