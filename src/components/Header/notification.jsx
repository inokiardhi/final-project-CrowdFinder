import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "../../redux/action/notification";
import { Container, Row, Col } from "react-bootstrap";
import AvatarCard from "../../components/AvatarCard";
import Hero from "../../components/Hero";
import { getPostById } from "../../redux/action/postById";
import { getCurrentUser, getUser } from "../../redux/action/user";
import ModalUpdate from "../../components/ModalUpdate";

export default function Getnotif() {
  const dispatch = useDispatch();
  const { notif } = useSelector((state) => state.notification);
  const user = useSelector((state) => state.userData.user);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen("sm-down", "md-down", "lg-down", "xl-down", "xxl-down");
    setShow(true);
  }
  useEffect(() => {
    dispatch(getPostById(1, user.id));
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    dispatch(Notification());
  }, []);
  return (
    <>
      <Container style={{ minHeight: "100vH", paddingBottom: "500px" }}>
        <div className="Profile-page">
          <Hero />
          <Row>
            <Col xl={4}>
              <AvatarCard
                action={handleShow}
                username={user.fullname}
                location={user.location}
                photo={`https://ui-avatars.com/api/?name=${user?.fullname}&background=random&length=1&rounded=true&size=35`}
              />
            </Col>
            <Col xl={1}></Col>
            <Col>
              <>
                <div className="button-menu d-flex">
                  <h5>Notification</h5>
                </div>
                <div className="d-flex flex-wrap justify-content-between py-3">
                  {notif?.data && notif?.data?.length
                    ? notif?.data?.map((item, index) => {
                        return (
                          <div className="mb-3" key={index}>
                            <h5>{item.content}</h5>
                          </div>
                        );
                      })
                    : notif?.data?.map((item, index) => {
                        return (
                          <div key={index}>
                            <h5>{item.content}</h5>
                          </div>
                        );
                      })}
                </div>
              </>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
