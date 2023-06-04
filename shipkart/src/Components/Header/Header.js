import React from "react";
import "./Header.css";
import headerImg from "./Images/cover.png";
export const Header = () => {
    const clickHandler = () => {
        console.log("CLICKED")
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
