import React, { useState } from "react";
import "./Profile.css";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import { Address } from "./Address";
import { NewAddress } from "./NewAddress";
import { AddressState } from "../../Contexts/Data/AddressContext";

import { NavLink } from "react-router-dom";
export const Profile = () => {
  const { setIsLoggedIn } = AuthState();
  const [toggleBtn, setToggleBtn] = useState(true);
  const { isHideBox, setisHideBox } = AddressState();

  const logOutHandler = () => {
    setIsLoggedIn(null);
    localStorage.clear();
  };

  var userJson = localStorage.getItem("user");
  if (userJson) {
    var user = JSON.parse(userJson);
  } else {
    localStorage.removeItem("user");
  }

  return (
    <div className="profile-page-container">
      <p className="text-center heading-profile ">Account</p>
      {isHideBox && <NewAddress setisHideBox={setisHideBox} />}
      <div className="profile-container">
        <div className="profile-innerContainer">
          <div className="btn-profile-div">
            <button
              onClick={() => setToggleBtn(!toggleBtn)}
              className={`btn-profile ${toggleBtn ? "btn-profile-color" : ""}`}
            >
              Profile
            </button>
            <button
              onClick={() => setToggleBtn(!toggleBtn)}
              className={`btn-address ${!toggleBtn ? "btn-profile-color" : ""}`}
            >
              Address
            </button>
          </div>
          {!toggleBtn && <Address />}
          {toggleBtn && (
            <div className="profile-tab-container">
              <div className="margin-bottom-1">
                <h2>Profile Details</h2>
              </div>
              <div className="main-profile-details">
                <div className="align-profile-details">
                  <div className="details-title">Full name:</div>
                </div>
                <div className="text-field profile-value">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className=" align-profile-details">
                  <div className="details-title">Email:</div>
                </div>

                <div className="text-field profile-value">{user?.email}</div>
              </div>

              <div className="btn-setting-logout flex justify-between">
                <NavLink className={"navlink-address-setting"}>
                  <button
                    onClick={() => setToggleBtn(!toggleBtn)}
                    className="profile-Address-btn"
                  >
                    Address Setting
                  </button>
                </NavLink>
                <NavLink
                  className={"navlink-address-setting"}
                  to={"/orderPlaced"}
                >
                  {" "}
                  <button className="profile-Address-btn">Order History</button>
                </NavLink>

                <div>
                  <button
                    onClick={logOutHandler}
                    className="profile-logout-btn top-margin"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
