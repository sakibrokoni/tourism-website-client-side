import React from "react";
import "./Service.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, details, img, _id } = props.service;
  return (
    <div>
      <Col>
        <Card className="cards">
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "300px", borderRadius: "5px" }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/orders/${_id}`}>
              <Button variant="outline-success">Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
