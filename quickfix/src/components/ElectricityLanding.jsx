import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const LightningEffect = () => {
    return (
        <motion.div
            style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                width: "3px",
                height: "150px",
                background: "linear-gradient(white, transparent)",
                filter: "drop-shadow(0px 0px 10px white)",
                transform: "translateX(-50%)",
            }}
            animate={{
                opacity: [0, 1, 0, 1, 0],
                scaleY: [1, 1.5, 0.8, 1.3, 1],
                rotate: [-10, 10, -5, 5, 0],
            }}
            transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
            }}
        />
    );
};

const ElectricityLanding = () => {
    return (
        <Container
            fluid
            className="d-flex align-items-center justify-content-center text-center vh-100"
            style={{ background: "linear-gradient(to right, #000428, #004e92)", position: "relative" }}
        >
            <Row>
                <Col>
                    <h1 className="text-light">Powering the Future</h1>
                    <p className="text-light">Experience the energy of innovation and sustainability.</p>
                    <Button variant="warning" className="mt-3">Get Started</Button>
                </Col>
            </Row>
            <LightningEffect />
        </Container>
    );
};

export default ElectricityLanding;
