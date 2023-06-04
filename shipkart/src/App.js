import React from "react";
import Mockman from "mockman-js";
import { Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;