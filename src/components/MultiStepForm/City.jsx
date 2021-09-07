import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import "./City.css";
import { Col, Row } from "react-bootstrap";

const City = ({ state, setState, setPage }) => {
  const { location, role } = state;
  const { next } = setPage;
  return (
    <div className="container-city">
      <div className="d-flex">
        <div className="w-100">
          <div className="Citybgimage-left">
            <div className="left-city"></div>
          </div>
        </div>

        <div className="w-100">
          <div className="Citybgimage-right justify-content-center">
            <div className="Right-City d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="content-city">
        <div className="city">
          <Container>
            <div className="content-form d-flex justify-content-center">
              <Form className="mt-5 mb-5">
                <h2>Welcome to CrowdFinder</h2>
                <h3>Helps you to find right community</h3>
                <div className="interest ms-3">
                  <div className="content-interest justify-content-center">
                    <p>
                      <i className="fas fa-map-marker-alt"></i> Where is city you
                      live in?
                    </p>
                    <div style={{ width: "85%" }}>
                      <Form.Group className="mb-3" controlId="interest">
                        <Form.Control
                          label="Location"
                          name="location"
                          value={location}
                          onChange={setState}
                          placeholder="Type a city’s name"
                        />
                      </Form.Group>
                      <p>Create Acount as :</p>
                      <div
                        className="btn-group mb-3"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <Row>
                          <Col>
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="user"
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-outline-primary"
                              for="user"
                            >
                              User
                            </label>
                          </Col>
                          <Col>
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="comunity"
                              autocomplete="off"
                            />
                            <label
                              className="btn btn-outline-primary"
                              for="comunity"
                            >
                              Comunity
                            </label>
                          </Col>
                        </Row>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={next}
                          className="button"
                          style={{ width: "20rem" }}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default City;
