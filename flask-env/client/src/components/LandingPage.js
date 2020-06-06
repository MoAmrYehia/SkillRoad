import React, { Fragment } from "react";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage/ProfilePage";
import Home from "./Home"

function LandingPage() {
  return (
    <Fragment>
      <Home />
      <ProfilePage />
      <Footer />
    </Fragment>
  );
}
export default LandingPage;