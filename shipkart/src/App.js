import "./App.css";
import "./utils.css";
import React from "react";
import Mockman from "mockman-js";
import { Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productlisting" element={<ProductListing/> }/>
        <Route path="/wishlist" element={<Wishlist/> }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;