import React from 'react';
import logo from './logo_b.png'
import button from './Home/UploadButton'


function Header() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <img
                src={logo}
                width="500"
                height="500"
                className="d-inline-block align-top"
                alt="SkillRoad logo"
            />
            <button />
        </div>
    )
}

export default Header