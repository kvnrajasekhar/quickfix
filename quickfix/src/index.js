import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Raise from "./components/Raise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import IntitalRaise from "./components/InitailRaise";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<App to="/home" />}>
        <Route path="/home" element={<App />} />
      </Route>
        <Route path="/complaint" element={<Raise />} />
        <Route path="/raise" element={<IntitalRaise />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
