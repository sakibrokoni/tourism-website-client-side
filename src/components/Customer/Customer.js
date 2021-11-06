import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import image3 from "../images/traveler1.jpeg";
import image8 from "../images/traveler2.jpg";
import image9 from "../images/traveler3.jpg";

const Customer = () => {
    return (
        <div
            className="container p-5 my-5 rounded"
            style={{ backgroundColor: "#E5E4E2" }}
        >
            <div className="text-black">
                <h5>A Good Word Means A Lot</h5>
                <h1 style={{ fontWeight: "800" }}>
                    Customer <span className="text-danger">Testimonials</span>
                </h1>
                <h5>
                    It’s always the word of mouth that’s the best advice. Here are some of
                    our…
                </h5>
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-4 ">
                    {/* 1st Card  */}

                    <Col>
                        <Card style={{ border: "none" }}>
                            <Card.Img
                                variant="top"
                                src={image3}
                                style={{ height: "300px", borderRadius: "10px" }}
                            />
                            <Card.Body>
                                <Card.Title>Ernest Hemingway</Card.Title>

                                <Card.Text>
                                    <h6>Traveller</h6>
                                    “It is good to have an end to journey toward; but it is the
                                    journey that matters, in the end.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 2nd Card  */}

                    <Col>
                        <Card style={{ border: "none" }}>
                            <Card.Img
                                variant="top"
                                src={image8}
                                style={{ height: "300px", borderRadius: "10px" }}
                            />
                            <Card.Body>
                                <Card.Title>Anaïs Nin</Card.Title>
                                <Card.Text>
                                    <h6>Traveller</h6>
                                    “Though we travel the world over to find the beautiful, we
                                    must carry it with us, or we find it not.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 3rd Card  */}

                    <Col>
                        <Card style={{ border: "none" }}>
                            <Card.Img
                                variant="top"
                                src={image9}
                                style={{ height: "300px", borderRadius: "10px" }}
                            />
                            <Card.Body>
                                <Card.Title>Gustave Flaubert</Card.Title>
                                <Card.Text>
                                    <h6>Traveller</h6>
                                    “The real voyage of discovery consists not in seeking new
                                    landscapes, but in having new eyes.”
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Customer;
