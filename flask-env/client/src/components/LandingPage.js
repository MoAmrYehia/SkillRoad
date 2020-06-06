import React, { Fragment } from "react";
import Home from "./Home"
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'


function LandingPage() {
    return (
        <Fragment>
            <Home />
            <div className="text-center">
                <Link to={"/profile"}>
                    <Button variant="dark" >Start your SkillRoad</Button>
                </Link>
            </div>
        </Fragment>
    );
}
export default LandingPage;