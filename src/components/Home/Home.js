import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import image1 from "../images/1.jpg";
import image5 from "../images/2.jpg";
import Customer from "../Customer/Customer";
import Guide from "../Guide/Guide";
import "./Home.css";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="" />
          <Carousel.Caption>
            <h3>“A journey of a thousand miles begins with a single step”</h3>
            <Link to="/services">
              <button className="btn btn-md btn-outline-warning btn-lg">
                Explore
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="" />
          <Carousel.Caption>
            <h3>
              “Travel makes one modest. You see what a tiny place you occupy in
              the world”
            </h3>
            <Link to="/services">
              <button className="btn btn-md btn-outline-info btn-lg">
                Explore
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services></Services>

      {/* Extra Two Part */}
      
      <Customer></Customer>
      <Guide></Guide>
    </div>
  );
};

export default Home;
