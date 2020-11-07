import React from 'react';

import './Header.css'

export const Header = () => {

    const logo = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

    return (
        <header>            
            {/* <div className="header-title-container">
                <svg className="film-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"/></svg>            
                <h1 className="header-title">Top 20 Ryan Gosling films</h1>
             </div> */}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="imdb logo" className="logo" />
            </a>
        </header>
    )
}