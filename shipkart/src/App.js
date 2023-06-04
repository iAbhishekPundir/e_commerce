import "./App.css";
import "./utils.css";
import React from "react";
import Mockman from "mockman-js";
import { Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;