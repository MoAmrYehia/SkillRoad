import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to={"/"} className="nav-link">
                            {" "}
                            Home{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to={"/header"} className="nav-link">
                            Header
                        </Link>
                    </li>
                    <li>
                        <Link to={"/footer"} className="nav-link">
                            Footer
                        </Link>
                    </li>
                    <li>
                        <Link to={"/submit"} className="nav-link">
                            FileSubmission
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav