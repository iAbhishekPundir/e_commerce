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
        <img
          class="homeImg" alt="sale-img"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1e599d37-1ed6-4e39-9057-ffb4065173b51651897264796-Unbelievable-Deals.jpg"
          onClick={clickHandler}
        />
      </section>
    </>
  );
};
