import React, { useEffect } from "react";
import "./Wishlist.css";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { DataState } from "../../Contexts/Data/DataContext";

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = DataState();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {wishlist?.length > 0 ? (
        <div>
          <h2 className="text-center top-margin">
            My Wishlist({wishlist?.length})
          </h2>
          <div className="wishlist-container">
            {wishlist?.map((product) => (
              <SingleProduct key={product._id} product={product} deleteIcon />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-center top-margin">Your Wishlist is Empty ☹️</h2>
        </div>
      )}
    </>
  );
};
