import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage/ProfilePage";

function LandingPage() {
  return (
    <Fragment>
      <Header />
      <ProfilePage />
      <Footer />
    </Fragment>
  );
}
export default LandingPage;