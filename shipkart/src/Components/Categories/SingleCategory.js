import React from "react";
import { useNavigate } from "react-router-dom";
import { DataState } from "../../Contexts/Data/DataContext";

export const SingleCategory = ({ category }) => {
  const { categoryName, description, img } = category;
//   const navigate = useNavigate();
//   const { dispatch } = DataState();

  const handleCategoryClick = () => {
    // navigate("/productlisting");
    // dispatch({ type: "CLEAR_ALL_FILTERS" });
    // dispatch({ type: "FILTER_BY_CATEGORIES", payload: category.categoryName });
  };
  return (
    <div
      className="category-card  image-container"
      onClick={handleCategoryClick}
    >
      <img src={img} alt="categoryName" className="category-img" />
      <div className="toggle-background">
        <div className="category-info">
          <h3 className="category-name">{categoryName}</h3>
        </div>
        <p className="category-shopNow">COLLECTION</p>
      </div>
    </div>
  );
};
