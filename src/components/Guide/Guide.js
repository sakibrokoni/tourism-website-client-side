import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import image3 from "../images/guide2.jpg";
import image4 from "../images/guide1.jpg";
import image5 from "../images/guide3.jpg";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div>
      {/* show our guide */}
      <h1>
        Our <span className="text-danger">Tour Guide</span>
      </h1>
      <div className="container my-5">
        <Row xs={1} md={3} className="g-4 ">

          {/* 1st Card  */}

          <Col>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src={image3}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Alex Micky</Card.Title>
                <Card.Text>
                  We fling ourselves on an exotic destination hoping that someone will tell us what we are looking at, but by that time it's too late, and all the lectures and tour guides simply add to our confusion.
                </Card.Text>
                <Link to="/contact"><Button variant="outline-warning">For Details..</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          {/* 2nd Card  */}

          <Col>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src={image4}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title>Harlan Coben</Card.Title>
                <Card.Text>
                  To travel best requires some time preparing for your visit to a particular location - that you don't travel anywhere without spending a few nights reading about the culture and history of the place you are visiting.
                </Card.Text>
                <Link to="/contact"><Button variant="outline-warning">For Details..</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd Card  */}

          <Col>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src={image5}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Jhon Smith</Card.Title>
                <Card.Text>
                  Erudite and entertaining, Max Anderson is the perfect tour guide to the world of art. The Quality Instinct is both educational and enlightening from start to finish, the thinking person's guide to museums.
                </Card.Text>
                <Link to="/contact"><Button variant="outline-warning">For Details..</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Guide;
