import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo_b.png'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    SkillRoad
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header