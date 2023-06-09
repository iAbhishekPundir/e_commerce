import React, { useEffect } from "react";
import "./Cart.css";
import { SingleCartProduct } from "./Components/SingleCartProduct/SingleCartProduct";
import { PriceDetails } from "./Components/CartPriceDetails/PriceDetails";
import { DataState } from "../../Contexts/Data/DataContext";

export const Cart = () => {
  const {
    state: { cart },
  } = DataState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {cart?.length > 0 ? (
        <div>
          <h2 className="text-center top-margin">My Cart({cart?.length})</h2>
          <div className="cart-main">
            <div className="cart-container">
              {cart?.map((product) => (
                <SingleCartProduct key={product._id} product={product} />
              ))}
            </div>
            <PriceDetails />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-center top-margin">Your Cart is Empty ☹️</h2>
        </div>
      )}
    </>
  );
};
