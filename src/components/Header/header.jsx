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
  NavDropdown,
  Col,
} from "react-bootstrap";
import LogoCrowdFinder from "../../Asset/LogoCrowdFinder";
import "./header.css";
import { Link } from "react-router-dom";

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
        <Navbar >
          <Container>
            <Link to="/home" style={{marginTop:"2rem"}}><Navbar.Brand className="header-logo">
              <LogoCrowdFinder/>
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-around">
              {isLoggedIn && (
                <>
                  <Nav className="me-auto">
                    <Form className="search-bar d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => debounceSearch(e)}
                      />
                    </Form>
                  </Nav>
                  {/* {} */}
                  <Nav className="Feed-Notification mx-5">
                    <Nav.Link className="mx-5">
                      <Link
                        to="/home"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i class="fa fa-home fa-lg" style={{marginLeft:"1rem"}}></i>
                        <Col>
                          <p>Feeds</p>
                        </Col>
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <i class="fa fa-bell fa-lg"style={{marginLeft:"23px"}}></i>
                      <Col>
                        <p>Notification</p>
                      </Col>
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <NavDropdown
                      style={{ padding: "0px", width: "61px", height: "80px" }}
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
