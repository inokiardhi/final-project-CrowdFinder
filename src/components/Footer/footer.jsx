import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/logo.png"
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="logo">
            <img src={LogoCrowdFinder} alt="Logo" width="200" />
            </div>
          </Col>
          <Col className="list-unstyled mt-5">
            <h4>Menu</h4>
            <ul className="m-0 p-0 mb-2">
              <li>Message</li>
              <li>Profile</li>
              <li>Profile setting</li>
              <li>Terms and condition</li>
            </ul>
          </Col>
          <Col className="list-unstyled  mt-5">
            <h4>Our Office</h4>
            <p>Jl. Hayam wuruk no 88, West Jakarta</p>
          </Col>
          <Col className="list-unstyled  mt-5">
            <h4>Contact us</h4>
            <p>E-mail : help@washme.co.id</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
