import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/action/user";
import "./index.css";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GooglePlay.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./responsive.css"
const eye = <FontAwesomeIcon className="fa-lg" icon={faEye} />;


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
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
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

  // console.log("form", form);

  return (
    <>
      <Form onSubmit={handleRegister}>
        {page === 1 ? (
          <div className="container-signup">
            <div className="main-sign d-flex flex-md-column flex-lg-row flex-sm-column">
              <div className="Fullbgimage-left w-100">
                <div className="left d-flex align-items-center">
                  <div>
                    <div className="image-logo">
                      <img
                        className="Logo justify-content-center"
                        src={Logo}
                        alt="logo"
                      />
                    </div>
                    <div className="logo-title">

                      <h2 >Let’s make your own crowd!</h2>

                    </div>
                    <div className="image-app d-flex justify-content-center align-items-center">
                      <div className="play-store me-1">
                        <img
                          src={PlayStore}
                          alt="playstore"
                        />
                      </div>
                      <div className="app-store ms-1">
                        <img
                          src={AppStore}
                          alt="appstore"
                        />
                      </div>


                    </div>
                  </div>
                </div>
              </div>

              <div className="Fullbgimage-right justify-content-center w-100">
                <div className="Right d-flex justify-content-center">
                  <div className="box my-auto" style={{ width: "25rem" }}>
                    <Form>
                      <div>
                        <Form.Group className="d-flex mt-3 mb-3 justify-content-center">
                          <h2 style={{ fontSize: "28px" }} className="mt-auto">
                            Sign Up
                          </h2>
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicFullName"
                        >
                          <label
                            className="d-flex justify-content-rigth mb-2"
                            style={{ fontSize: "18px" }}
                          >
                            Full Name
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Crowd Finder"
                            value={form.name}
                            name="fullname"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicUserName"
                        >
                          <label
                            className="d-flex justify-content-rigth mb-2"
                            style={{ fontSize: "18px" }}
                          >
                            Username
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="crowdfinder"
                            value={form.username}
                            name="username"
                            onChange={(e) => changeForm(e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 mx-4"
                          controlId="formBasicEmail"
                        >
                          <label
                            className="d-flex justify-content-rigth mb-2"
                            style={{ fontSize: "18px" }}
                          >
                            Email address
                          </label>
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
                          <label
                            className="d-flex justify-content-rigth mb-2"
                            style={{ fontSize: "18px" }}
                          >
                            Password
                          </label>
                          <Form.Control
                            type={passwordShown ? "text" : "password"}
                            placeholder="enter you're password here"
                            value={form.password}
                            name="password"
                            onChange={(e) => changeForm(e)}
                          />
                          <div className="Mata-SignUp position-relative float-end">
                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                          </div>
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

                  >
                    <Form className="Form-data mx-3 my-3">
                      <h2>Welcome to CrowdFinder</h2>
                      <h3>Helps you to find right community</h3>
                      <p>Where is city you live in?</p>
                      <p>Let people find you greate thoughts</p>
                      <div className="interest">
                        <div className="content-interest justify-content-center">

                          <Form.Group className="mb-4" controlId="interest">
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
                                  className="form-radio-input me-2"
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
                              <div className="mb-3">
                                <input
                                  className="form-radio-input me-2"
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
                          <div className="d-flex justify-content-md-center justify-content-lg-center my-2 mt-5">
                            <Button
                              className="me-lg-3"
                              onClick={() => changeStep("prev")}
                              style={{ width: "10rem" }}
                            >
                              Prev
                            </Button>
                            <Button
                              className="ms-lg-3"
                              onClick={() => changeStep("next")}
                              style={{ width: "10rem" }}
                            >
                              Next
                            </Button>
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
                    className="content-interest"
                    style={{ width: "60rem" }}
                  >
                    <Form className="interest mx-5 my-5 justify-content-center">
                      <Row>
                        <h2 className="mt-3">What topic are you interesting in?</h2>
                        <p className="mb-3" style={{ fontSize: "20px" }}>
                          There a lot of people and community waiting you! Let's
                          be part of them
                        </p>
                        <p className="mb-3" style={{ fontSize: "18px" }}>
                          We will find you the communities and pople which fit
                          with your interesting topics. So let's find them
                        </p>
                      </Row>
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
                        <p>You can choose Max 5 Interest</p>
                        <div className="button-choseiterest">
                          <Row>
                            <Col className="mt-3 mb-4">
                              <div className="d-flex">
                                <Button
                                  onClick={() => changeStep("prev")}
                                  className="me-3"
                                  style={{ width: "10rem" }}
                                >
                                  Prev
                                </Button>
                                <Button
                                  type="submit"
                                  className="ms-3"
                                  style={{ width: "10rem" }}
                                  onClick={handleRegister}
                                >
                                  Next
                                </Button>
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
