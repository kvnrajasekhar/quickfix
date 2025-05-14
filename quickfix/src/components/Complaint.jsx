import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Complaint() {
  const cardDetails = [
    {
      title: "Elegant Modern Design",
      description: "Exploring the blend of form and function in architecture.",
      image: "https://via.placeholder.com/300x200", // Replace with your image
    },
    {
      title: "Nature-inspired Spaces",
      description: "Designs that harmonize with the environment.",
      image: "https://via.placeholder.com/300x200", // Replace with your image
    },
    {
      title: "Future-ready Concepts",
      description: "Innovative and forward-thinking ideas.",
      image: "https://via.placeholder.com/300x200", // Replace with your image
    },
  ];
  return (
    <Container className="mt-4">
      <Row>
        {cardDetails.map((card, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Complaint;
