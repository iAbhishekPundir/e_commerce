import React from "react";
import { NavLink } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <div className="text-center margin-top-1">
      <p className="margin-top-1 font-2">
        click here to go 👉🏻 <NavLink to="/productlisting">Home</NavLink>
      </p>
    </div>
  );
};
