import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-blue" style={{ marginTop: "300px" }}>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>AdvenTour</h3>
              <p>
                Get started with us today — complete the simple form below, and
                we’ll take care of the rest.
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Quick Link</h3>
              <ul>
                {/* added link because each text go to the route */}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Message Us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Get In Touch </h3>
              <ul>
                {/* added link because each text go to the route */}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">AdvenTour © Sakib Rokoni 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
