import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <a className="logo">Logo</a>
                <nav className="navbar">
                    <a>Home</a>
                    <a>Login</a>
                    <a>Contact</a>
                </nav>
            </div>
        );
    }
}

export default Header;