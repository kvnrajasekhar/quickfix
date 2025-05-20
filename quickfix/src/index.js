import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Raise from "./components/Raise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import IntitalRaise from "./components/InitailRaise";
import App from "./App";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import ComplaintStatusPage from "./components/ComplaintStatusPage";
import PageNotFound from "./components/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="/complaint" element={<Raise />} />
            <Route path="/raise" element={<IntitalRaise />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/status" element={<ComplaintStatusPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
