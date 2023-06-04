import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataContextProvider } from "./Contexts/Data/DataContext";
import { AuthContextProvider } from "./Contexts/Auth/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        {/* <AuthContextProvider> */}
          <App />
        {/* </AuthContextProvider> */}
      </DataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
