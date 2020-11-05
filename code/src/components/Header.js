import React from 'react';

import './Header.css'

export const Header = () => {

    const logo = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

    return (
        <header>            
                <h1 className="H1">Top 20 Ryan Gosling films</h1>
                <img src={logo} alt="imdb logo" className="logo"></img>           
        </header>
    )
}