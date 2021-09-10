import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import SignUp from "../components/MultiStepForm/index"
import SignIn from "../components/Main/SIgnin";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import MyProfile from "../pages/MyProfile";
import HomePage from "../pages/HomePage";
import ComunityProfile from "../pages/CommunityProfile";
import MyCrowd from "../pages/MyCrowd";
import UserProfile from "../pages/UserProfile";
import EventDetail from "../pages/EventDetail";
import CreateCommunityForm from "../components/CreateCommunityForm/index"
import FormCreateEventPage from "../pages/FormCreateEventPage/FormCreateEventPage";
import FormCreateAnnouncementPage from "../pages/FormCreateAnnouncementPage/FormCreateAnnouncementPage";
import ManageComunity from "../pages/ManageComunity";
import FormUpdateAnnouncementPage from "../pages/FormUpdateAnnouncementPage/FormUpdateAnnouncementPage";



const Routers = () => {
  const [isHeader, setIsHeader] = useState(false);
  let location = useLocation();


  useEffect(() => {
    switch (location.pathname) {
      case ("/"):
      case ("/signin"):
      case ("/comunity-form"):
        setIsHeader(false)
        break
      default:
        setIsHeader(true)
    }
  }, [location.pathname]);

  return (
    <>
      {isHeader && (<Header />)}
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/create-announcement">
          <FormCreateAnnouncementPage />
        </Route>
        <Route exact path="/update-announcement/:idPost">
          <FormUpdateAnnouncementPage />
        </Route>
        <Route exact path="/create-event">
          <FormCreateEventPage />
        </Route>
        <Route exact path="/profile">
          <MyProfile />
        </Route>
        <Route exact path="/user-profile">
          <UserProfile />
        </Route>
        <Route exact path="/comunity-profile/:userId">
          <ComunityProfile />
        </Route>
        <Route exact path="/mycrowd/:userId">
          <MyCrowd />
        </Route>
        <Route exact path="/eventdetail">
          <EventDetail />
        </Route>
        <Route exact path="/comunity-form">
          <CreateCommunityForm />
        </Route>
        <Route exact path="/manage-comunity">
          <ManageComunity />
        </Route>
        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      {isHeader && (<Footer />)}
    </>
  );
};

export default Routers;
