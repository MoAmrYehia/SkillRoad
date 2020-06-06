import React, { Fragment } from "react";
import Home from "./Home"
import Button from "react-bootstrap/Button";
import ProfilePage from "./ProfilePage/ProfilePage";

function LandingPage() {
  return (
    <Fragment>
      <Home />
      <div className="text-center">
          <Button variant="dark" href="profile">Try it out</Button>
      </div>
    </Fragment>
  );
}
export default LandingPage;