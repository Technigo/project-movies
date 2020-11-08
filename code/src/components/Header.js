import React from 'react';

import 'styles/header.css';

export const Header = () => {
    
    return (
        <header className='header'>
          <h1> Movie Toplist 
            <span role='img' aria-label='popcorn'> 🍿 </span>
          </h1>
        </header>
    );
};