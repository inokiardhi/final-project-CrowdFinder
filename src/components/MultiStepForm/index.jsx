import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/action/user";
import "./index.css";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MultiStep() {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
    username: "",
    fullname: "",
    location: "",
    interest: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (page > 3) {
      alert("register successs");
    }
  }, [page]);

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeInterest = (e) => {
    if (form.interest.length <= 5) {
      setForm({
        ...form,
        interest: form.interest.find((item) => item === e.target.value)
          ? form.interest.filter((item) => item !== e.target.value)
          : [...form.interest, e.target.value],
      });
    }
  };

  const changeStep = (type) => {
    if (type === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      Register(
        form.role,
        form.email,
        form.password,
        form.username,
        form.fullname,
        form.location,
        form.interest
      )
    );
  };

  console.log("form", form);

  return (
    <>
      <Form onSubmit={handleRegister}>
        {page === 1 ? (
          <div className="container-signup">
            <div className="d-flex">
              <div className="Fullbgimage-left w-100">
                <div className="left d-flex align-items-center">
                  <div>
                    <img
                      className="Logo justify-content-center"
                      src={Logo}
                      alt="logo"
                    />
                    <h2 style={{ fontSize: "28px" }}>
                      Let’s make your own crowd!
                    </h2>
                    <img
                      src={PlayStore}
                      alt="playstore"
                      width="175"
                      height="55"
                      className="d-inline-block align-top"
                    />
                    <img
                      src={AppStore}
                      alt="appstore"
                      width="175"
                      height="65"
                      className="d-inline-block align-top"
                    />
                  </div>
                </div>
              </div>

              <div className="Fullbgimage-right justify-content-center w-100">
                <div className="Right d-flex justify-content-center">
                  <div className="box my-auto" style={{ width: "25rem" }}>
                    <Form>
                      <div>
                        <Form.Group className="d-flex mt-3 justify-content-center">
                          <h2 style={{ fontSize: "28px" }} className="mt-auto">
                            Sign Up
                          </h2>
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicFullName"
                        >
                          <Form.Label style={{ fontSize: "18px" }}>
                            Full Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Jhon Doe"
                            value={form.name}
                            name="fullname"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicUserName"
                        >
                          <Form.Label style={{ fontSize: "18px" }}>
                            Username
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="JhonDoe12"
                            value={form.username}
                            name="username"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicEmail"
                        >
                          <Form.Label style={{ fontSize: "18px" }}>
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="example@gmail.com"
                            value={form.email}
                            name="email"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicPassword"
                        >
                          <Form.Label style={{ fontSize: "18px" }}>
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            name="password"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Col>
                            <button
                              disabled={!form.email || !form.password}
                              className="button-signup mt-3 width-nokay"
                              type="submit"
                              onClick={() => changeStep("next")}
                            >
                              SignUp
                            </button>
                          </Col>
                          <p
                            style={{ fontSize: "16px" }}
                            className="text-center mt-3"
                          >
                            Already have an account ?{" "}
                            <Link to="/signin">Sign in</Link>
                          </p>
                        </Form.Group>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* ================================================= */}

        {page === 2 ? (
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
                  <div
                    className="content-form d-flex justify-content-center"
                    style={{ width: "43rem" }}
                  >
                    <Form className="mt-5 mb-5" style={{ width: "32rem" }}>
                      <h2>Welcome to CrowdFinder</h2>
                      <h3>Helps you to find right community</h3>
                      <div className="interest ms-3">
                        <div className="content-interest justify-content-center">
                          <p>
                            <i className="fas fa-map-marker-alt"></i> Where is
                            city you live in?
                          </p>
                          <p>Let people find you greate thoughts</p>
                          <div style={{ width: "85%" }}>
                            <Form.Group className="mb-3" controlId="interest">
                              <Form.Control
                                type="text"
                                placeholder="Type a city’s name"
                                value={form.location}
                                name="location"
                                onChange={(e) => changeForm(e)}
                              />
                            </Form.Group>
                            <p>Create Acount as :</p>
                            <Form.Group>
                              <Col>
                                <div className="mb-1">
                                  <input
                                    className="form-radio-input"
                                    type="radio"
                                    name="role"
                                    placeholder="User"
                                    value="user"
                                    onChange={(e) => changeForm(e)}
                                  />
                                  <label style={{ fontSize: "15px" }}>
                                    User
                                  </label>
                                </div>
                                <div className="mb-2">
                                  <input
                                    className="form-radio-input"
                                    type="radio"
                                    name="role"
                                    placeholder="Community"
                                    value="community"
                                    onChange={(e) => changeForm(e)}
                                  />
                                  <label style={{ fontSize: "15px" }}>
                                    Community
                                  </label>
                                </div>
                              </Col>
                            </Form.Group>
                            <div className="d-flex justify-content-center my-2 mt-5">
                              <Button
                                className="me-3"
                                onClick={() => changeStep("prev")}
                                style={{ width: "10rem" }}
                              >
                                Prev
                              </Button>
                              <Button
                                className="ms-3"
                                onClick={() => changeStep("next")}
                                style={{ width: "10rem" }}
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
        ) : null}

        {/* ================================================ */}

        {page === 3 ? (
          <div className="container-interest">
            <div className="d-flex">
              <div className="w-100">
                <div className="bgimage-left">
                  <div className="left-interest"></div>
                </div>
              </div>

              <div className="w-100">
                <div className="bgimage-right justify-content-center">
                  <div className="Right-interest d-flex justify-content-center"></div>
                </div>
              </div>
            </div>

            <div className="yes">
              <div className="choose-interest">
                <Container>
                  <div
                    className="content-interest justify-content-center"
                    style={{ height: "35rem", width: "60rem" }}
                  >
                    <Form className="interest mx-5 my-5 justify-content-center">
                      <h3 className="my-3">
                        What topic are you interesting in?
                      </h3>
                      <p className="mb-4" style={{ fontSize: "20px" }}>
                        There a lot of people and community waiting you! Let's
                        be part of them
                      </p>
                      <p className="mb-4" style={{ fontSize: "18px" }}>
                        We will find you the communities and pople which fit
                        with your interesting topics. So let's find them
                      </p>
                      <Row>
                        {/* {Coll 1} */}
                        <Col>
                          {[
                            "sports",
                            "finance",
                            "automotive",
                            "politics",
                            "design",
                          ].map((type) => (
                            <div
                              key={`default-${type}`}
                              className="mb-4"
                              style={{ fontSize: "18px" }}
                            >
                              <Form.Check
                                type="checkbox"
                                placeholder="enter your interest"
                                id={`default-${type}`}
                                label={` ${type}`}
                                value={`${type}`}
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== `${type}`
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                            </div>
                          ))}
                        </Col>

                        <Col>
                          {["cook", "tech", "religion", "art", "music"].map(
                            (type) => (
                              <div
                                key={`default-${type}`}
                                className="mb-4"
                                style={{ fontSize: "18px" }}
                              >
                                <Form.Check
                                  type="checkbox"
                                  placeholder="enter your interest"
                                  id={`default-${type}`}
                                  label={` ${type}`}
                                  value={`${type}`}
                                  onChange={(e) => changeInterest(e)}
                                  disabled={
                                    form.interest.length < 5
                                      ? false
                                      : form.interest.filter(
                                        (item) => item !== `${type}`
                                      ).length === 5
                                        ? true
                                        : false
                                  }
                                />
                              </div>
                            )
                          )}
                        </Col>

                        <Col>
                          {[
                            "business",
                            "psychology",
                            "tourism",
                            "bike",
                            "science",
                          ].map((type) => (
                            <div
                              key={`default-${type}`}
                              className="mb-4"
                              style={{ fontSize: "18px" }}
                            >
                              <Form.Check
                                type="checkbox"
                                placeholder="enter your interest"
                                id={`default-${type}`}
                                label={` ${type}`}
                                value={`${type}`}
                                onChange={(e) => changeInterest(e)}
                                disabled={
                                  form.interest.length < 5
                                    ? false
                                    : form.interest.filter(
                                      (item) => item !== `${type}`
                                    ).length === 5
                                      ? true
                                      : false
                                }
                              />
                            </div>
                          ))}
                        </Col>
                      </Row>
                      <div className="mt-3">
                        <i class="fas fa-exclamation-triangle">
                          <p>You can choose Max 5 Interest</p>
                        </i>

                        <div className="button-choseiterest">
                          <Row>
                            <Col className="mt-3">
                              <div className="d-flex">
                                <Button
                                  onClick={() => changeStep("prev")}
                                  className="me-3"
                                  style={{ width: "10rem" }}
                                >
                                  Prev
                                </Button>
                                {/* <Link to="/signin"> */}
                                <Button
                                  type="submit"
                                  className="ms-3"
                                  style={{ width: "10rem" }}
                                  onClick={handleRegister}
                                >
                                  Next
                                </Button>
                                {/* </Link> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Form>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        ) : null}
      </Form>
    </>
  );
}
