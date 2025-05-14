import React, { useEffect } from "react";
import "../css/ElectricityLanding.css";
import bg from "../assets/bg.jpg";
import man from "../assets/main-file.png";
import clouds1 from "../assets/clouds_1.png";
import clouds2 from "../assets/clouds_2.png";
import mountainLeft from "../assets/mountain_left.png";
import mountainRight from "../assets/mountain_right.png";
import Header from "./Header"; 


const ElectricityLanding = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      document.getElementById("mountain_left").style.left = `-${value / 0.7}px`;
      document.getElementById("clouds_2").style.left = `-${value * 2}px`;
      document.getElementById("mountain_right").style.left = `${value / 0.7}px`;
      document.getElementById("clouds_1").style.left = `${value * 2}px`;
      document.getElementById("text").style.bottom = `-${value}px`;
      document.getElementById("man").style.height = `${
        window.innerHeight - value
      }px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header /> 
      <div id="top" className="top">
        <img src={bg} id="bg" alt="Background" />
        <h2 id="text">Quickfix</h2>
        <img src={man} id="man" alt="Man" />
        <img src={clouds1} id="clouds_1" alt="Clouds 1" />
        <img src={clouds2} id="clouds_2" alt="Clouds 2" />
        <img src={mountainLeft} id="mountain_left" alt="Mountain Left" />
        <img src={mountainRight} id="mountain_right" alt="Mountain Right" />
      </div>
    </>
  );
};

export default ElectricityLanding;
