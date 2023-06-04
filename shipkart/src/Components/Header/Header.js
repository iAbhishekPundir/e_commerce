import React from "react";
import "./Header.css";
import headerImg from "./Images/cover.png";
import { useNavigate } from "react-router-dom";
import { DataState } from "../../Contexts/Data/DataContext";
export const Header = () => {
  const { dispatch } = DataState();
  const navigate = useNavigate();
    const clickHandler = () => {
      dispatch({ type: "CLEAR_ALL_FILTERS" });
      navigate(`/productlisting`);
    }
  return (
    <>
      <section class="container section1">
        <img class="homeImg" alt="cover-img" src={headerImg}
        onClick={clickHandler} />
      </section>
    </>
  );
};
