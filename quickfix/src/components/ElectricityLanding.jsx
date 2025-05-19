import React, { useEffect } from "react";
import "../css/ElectricityLanding.css";
import bg from "../assets/bg.jpg";
import man from "../assets/main-file.png";
import clouds1 from "../assets/clouds_1.png";
import clouds2 from "../assets/clouds_2.png";
import mountainLeftImg from "../assets/mountain_left.png"; // Changed variable name
import mountainRight from "../assets/mountain_right.png";
import Header from "./Header";

const ElectricityLanding = () => {
    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            const mountainLeftElement = document.getElementById("mountain_left"); // Added variable
            const clouds2Element = document.getElementById("clouds_2");       // Added variable
            const mountainRightElement = document.getElementById("mountain_right"); // Added variable
            const clouds1Element = document.getElementById("clouds_1");       // Added variable
            const textElement = document.getElementById("text");           // Added variable
            const manElement = document.getElementById("man");             // Added variable

            if (mountainLeftElement) {
                mountainLeftElement.style.left = `-${value / 0.7}px`;
            }
            if (clouds2Element) {
                clouds2Element.style.left = `-${value * 2}px`;
            }
            if (mountainRightElement) {
                mountainRightElement.style.left = `${value / 0.7}px`;
            }
            if (clouds1Element) {
                clouds1Element.style.left = `${value * 2}px`;
            }
            if (textElement) {
               textElement.style.bottom = `-${value}px`;
            }
            if (manElement) {
                manElement.style.height = `${window.innerHeight - value}px`;
            }
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
                <img src={mountainLeftImg} id="mountain_left" alt="Mountain Left" /> {/* Corrected here */}
                <img src={mountainRight} id="mountain_right" alt="Mountain Right" />
            </div>
        </>
    );
};

export default ElectricityLanding;
