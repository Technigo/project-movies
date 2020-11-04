import React from 'react';

import RGImage from './Images/ryan-gosling-head.png'

import './Header.css'

export const Header = () => {

    const logo = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

    return (
        <header>
            <img src={logo} alt="imdb logo" className="logo"></img>

            <div className="title-wrapper">
                {/* <img src={RGImage} className="header-image" alt="Ryan Gosling"/> */}
                <h1>RYAN GOSLING</h1>
                <h2>popular films</h2>
            </div>
        </header>
    )
}