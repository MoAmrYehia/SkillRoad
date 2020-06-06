import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage/ProfilePage";

function LandingPage() {
  return (
    <Fragment>
      <Navbar />
      <ProfilePage />
      <Footer />
    </Fragment>
  );
}
export default LandingPage;