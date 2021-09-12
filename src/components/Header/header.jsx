import { useEffect } from "react";
import React from "react";
import { logout, getCurrentUser } from "../../redux/action/user";
import { useSelector, useDispatch } from "react-redux";
import { searchFunction, clearPost } from "../../redux/action/search";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Col,
} from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/LogoCrowdFinder";
import "./header.css";
import { Link } from "react-router-dom";
import "./responsive.css"

const Header = () => {
  const userrole = useSelector((state) => state.userData.user);
  const { isLoggedIn, user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  // const { CurrentUser, setCurrentUser } = useState(null)
  const Logout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const searchPost = (e) => {
    if (e.target.value) {
      dispatch(searchFunction(e.target.value));
    } else {
      dispatch(clearPost());
    }
  };

  const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debounceSearch = debounce((e) => searchPost(e));

  //  console.log('testing',user)
  return (
    <>
      <div className="header">
        <Navbar expand="lg" >
          <Container>
            <Link to="/home" style={{ marginTop: "2rem" }}><Navbar.Brand className="header-logo">
              <LogoCrowdFinder />
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {isLoggedIn && (
                <>
                  <Form className="search-bar">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => debounceSearch(e)}
                    />
                  </Form>

                  <Nav
                    className="mr-auto my-2 my-lg-0 Feed-Notification "
                    style={{ maxHeight: '100px' }}

                  >
                    <Nav className="mx-lg-5 my-lg-4 d-flex">
                      <Link
                        className="mx-lg-5 d-flex flex-column align-items-lg-center"
                        to="/home"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fa fa-home fa-lg my-2" style={{ color: "white" }}></i>
                        <p>Feeds</p>
                      </Link>
                      <Link
                        className="mx-lg-5 d-flex flex-column align-items-lg-center"
                        to="/notification"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fa fa-bell fa-lg my-2" style={{ color: "white" }}></i>
                        <p>Notification</p>
                      </Link>
                    </Nav>

                  </Nav>
                  <NavDropdown
                    className="avatar-drop"
                    title={
                      <div className="text-center avatar">
                        <img
                          src={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`}
                          alt="..."
                        />
                      </div>
                    }
                    id="collasible-nav-dropdown"
                  >
                    {userrole.role === "community" ? (
                      <NavDropdown.Item>
                        <Link
                          to="/manage-comunity"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Profile
                        </Link>
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item>
                        <Link
                          to="/profile"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Profile
                        </Link>
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={Logout}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav>

                  </Nav>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
