import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../../redux/action/user";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import * as yup from "yup";
import { Formik } from "formik";

const Signin = () => {
  const dispatch = useDispatch();
  const { isLoggendIn } = useSelector((state) => state.userData);

  const schema = yup.object().shape({
    email: yup.string()
      .email("Email is invalid")
      .required("This field is required"),
    password: yup.string()
      .required("Enter youre password"),
  });

  if (isLoggendIn) {
    return <Link to="/home" />;
  }

  console.log("signIn", )

  return (
    <div className="container-Signin">
      <div className="d-flex">
        <div className="Fullbgimage-left w-100">
          <div className="left d-flex align-items-center">
            <div>
              <img
                className="Logo justify-content-center"
                src={Logo}
                alt="logo"
              />
              <h2 style={{ fontSize: "28px" }}>Let’s make your own crowd!</h2>

              <img
                src={PlayStore}
                alt="playstore"
                width="175"
                height="59"
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

        <div className="Signinbg-right w-100">
          <div className="Right-signin d-flex">
            <div className="box-signin my-auto" style={{ width: "25rem" }}>
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  const { email, password } = values;
                  dispatch(Login(email, password))
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
                  <Form className="align-center" style={{ height: "33rem"}} noValidate onSubmit={handleSubmit}>
                    <div>
                      <Form.Group className="d-flex mt-3 mb-4 justify-content-center">
                        <h2 style={{ fontSize: "28px" }} className="mt-auto">Login</h2>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="validataionFOrmik03"
                      >
                        <label className="d-flex justify-content-rigth mb-3" style={{ fontSize: "18px" }}>Email address</label>
                        <Form.Control
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.email}
                          isValid={touched.email && !errors.email}
                          // isInValid={!!errors.email}
                          placeholder="email@example.com"
                        />
                        {<p style={{ color: "red", fontSize: "15px" }}>{errors.email && touched.email && errors.email}</p>}
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="formBasicPassword"
                      >
                        <label className="d-flex justify-content-rigth mb-3" style={{ fontSize: "18px" }}>Password</label>
                        <Form.Control
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          isValid={touched.password && !errors.password}
                          // isinvalid={!!errors.password}
                          placeholder="enter you're password here"
                        />
                        {<p style={{ color: "red", fontSize: "15px" }}>{errors.password && touched.password && errors.password}</p>}
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
                        <p style={{ fontSize: "16px" }} className="mt-4 text-muted text-center signFoot">
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
