import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import facebookIcon from '../assets/facebook-icon.png'
import twitterIcon from '../assets/twitter-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'

const Header = () => {
    return (
        <section className="header-container">
            <div>
                <Link to='/'><p className="header-title">Movieflix</p></Link>
            </div>
            <div className="media-icons-container">
                <img className="media-icons" src={facebookIcon} alt=" facebook-icon"></img>
                <img className="media-icons" src={twitterIcon} alt="twitter-icon"></img>
                <img className="media-icons" src={youtubeIcon} alt="youtube-icon"></img>
            </div>
        </section >
    )
}

export default Header