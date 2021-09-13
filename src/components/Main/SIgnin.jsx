import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../../redux/action/user";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GooglePlay.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import * as yup from "yup";
import { Formik } from "formik";
import "./responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "react-google-login";
const eye = <FontAwesomeIcon className="fa-lg" icon={faEye} />;

const Signin = () => {
  const dispatch = useDispatch();
  const { isLoggendIn } = useSelector((state) => state.userData);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is invalid")
      .required("This field is required"),
    password: yup.string().required("Enter youre password"),
  });

  if (isLoggendIn) {
    return <Link to="/home" />;
  }
  const responseGoogle = (response) => {
    console.log(response);
  }

  const clientId = "558045279581-0qv822ssgmrkck9kuie1aqprrufbgr47.apps.googleusercontent.com";
  console.log("signIn");

  return (
    <div className="container-Signin">
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
                <h2>Let’s make your own crowd!</h2>
              </div>
              <div className="image-app d-flex justify-content-center align-items-center">
                <div className="play-store me-1">
                  <img src={PlayStore} alt="playstore" />
                </div>
                <div className="app-store ms-1">
                  <img src={AppStore} alt="appstore" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Signinbg-right w-100">
          <div className="Right-signin d-flex">
            <div className="box-signin my-auto">
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  const { email, password } = values;
                  dispatch(Login(email, password));
                }}
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form
                    className="align-center"
                    style={{ height: "33rem" }}
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <Form.Group className="d-flex mt-3 mb-4 justify-content-center">
                        <h2 style={{ fontSize: "28px" }} className="mt-auto">
                          Login
                        </h2>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="validataionFOrmik03"
                      >
                        <label
                          className="d-flex justify-content-rigth mb-3"
                          style={{ fontSize: "18px" }}
                        >
                          Email address
                        </label>
                        <Form.Control
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.email}
                          isValid={touched.email && !errors.email}
                          placeholder="email@example.com"
                        />

                        {
                          <p style={{ color: "red", fontSize: "15px" }}>
                            {errors.email && touched.email && errors.email}
                          </p>
                        }
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="formBasicPassword"
                      >
                        <label
                          className="d-flex justify-content-rigth mb-3"
                          style={{ fontSize: "18px" }}
                        >
                          Password
                        </label>
                        <Form.Control
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={passwordShown ? "text" : "password"}
                          value={values.password}
                          isValid={touched.password && !errors.password}
                          placeholder="enter you're password here"
                        />
                        <div className="Mata-SignIn position-relative float-end">
                          <i onClick={togglePasswordVisiblity}>{eye}</i>
                        </div>
                        {
                          <p style={{ color: "red", fontSize: "15px" }}>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        }
                      </Form.Group>
                      <Form.Group>
                        <Col>
                          <button
                            className="button-signin mt-3 width-nokay"
                            type="submit"
                          >
                            Login
                          </button>
                        </Col>
                        <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign In with Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                          className="button-google"
                        />
                        <p
                          style={{ fontSize: "16px" }}
                          className="mt-4 text-muted text-center signFoot"
                        >
                          don't have an account? <Link to="/">Sign Up</Link>
                        </p>
                      </Form.Group>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
