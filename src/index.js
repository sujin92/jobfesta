import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import poster from "./images/poster.jpg";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route
        path="/cw2024"
        element={
          <div>
            <img
              src={poster}
              alt="Poster"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        }
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);
