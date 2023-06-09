import React, { useState } from "react";
import { AiFillHeart,  AiOutlineDelete } from "react-icons/ai";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import "./SingleProduct.css";
import {
  loginTocontinue,
  remove,
  success,
} from "../../Services/Toast/ToastServices";
import { DataState } from "../../Contexts/Data/DataContext";
import { addToCart } from "../../Services/Cart/CartServices";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Services/Wishlist/WishlistServices";

export const SingleProduct = ({ product, deleteIcon }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  let location = useLocation();
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    state: { wishlist },
    dispatch,
  } = DataState();
  const {
    _id,
    image,
    rating,
    size,
    itemName,
    oldPrice,
    newPrice,
    discount,
    isTrending,
    inStock,
  } = product;
  const {
    state: { cart },
  } = DataState();

  const handleProductClick = async (_id) => {
    navigate(`/product/${_id}`);
  };

  const handleAddToCart = () => {
    setIsDisabled(true);
    if (token) {
      addToCart(product, dispatch, token, navigate, location);
      success("Added To Cart!");
      setTimeout(() => setIsDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };
  const handleAddToWishlist = () => {
    setIsDisabled(true);
    if (token) {
      addToWishlist(product, dispatch, token);
      success("Added To Wishlist!");
      setTimeout(() => setIsDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };

  const handleRemoveFromWishlist = () => {
    setIsDisabled(true);
    if (token) {
      removeFromWishlist(_id, dispatch, token);
      remove("Removed from Wishlist!");
      setTimeout(() => setIsDisabled(false), 1500);
    }
  };

  return (
    <div className="product-card">
      <div className="card-header image-container">
        {isTrending && <span className="trending">Trending</span>}
        <img
          src={image}
          alt={itemName}
          className="product-image "
          onClick={() => handleProductClick(_id)}
        />
        <div>
          <p className="prod-size">{size}</p>
        </div>
      </div>
      <div className="name-rating-like">
        <p className="product-name">{itemName}</p>
        <div className="rating-like">
          <div className="rating-and-size">
          </div>

          <div>
            {token && wishlist?.some((data) => data._id === _id) ? (
              <span
                className="cart-like-btn liked"
                onClick={handleRemoveFromWishlist}
              >
                {!deleteIcon && <AiFillHeart />}
                {deleteIcon && <AiOutlineDelete/>}
              </span>
            ) : (
              <button
                className="cart-like-btn like wislist-like"
                onClick={handleAddToWishlist}
                disabled={isDisabled}
              >
                <AiFillHeart />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="price-and-discount">
        <div className="prices">
          <span className="new-price">₹{newPrice}</span>
          <span className="old-price">₹{oldPrice}</span>
        </div>
        <p className="discount">{Math.floor(
                    ((oldPrice - newPrice) / oldPrice) * 100
                  )}% OFF</p>
      </div>

      {token && cart?.some((data) => data._id === product._id) ? (
        <NavLink to="/cart">
          <button className="go-to-cart">
            Go To Cart <BsCartCheck className="icon-size" />
          </button>
        </NavLink>
      ) : inStock ? (
        <button
          className={inStock ? "add-to-cart" : "go-to-cart"}
          onClick={handleAddToCart}
          disabled={isDisabled}
        >
          Add To Cart <BsCartPlus className="icon-size" />
        </button>
      ) : (
        <button className="go-to-cart disabled-element" disabled>
          Out Of Stock
        </button>
      )}
    </div>
  );
};
