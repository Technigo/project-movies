import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header-container">
            <div>
                <Link to='/'><p className="header-title">Movieflix</p></Link>
            </div>
        </section>
    )
}

export default Header