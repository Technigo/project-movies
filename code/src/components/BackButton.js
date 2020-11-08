import React from 'react';

import 'styles/backbutton.css'

export const BackButton = () => {
    
    return (
        <div>
            <a className='back-button' href='/'>
                <i class="fa" > &#xf137; </i>
                <p> Back to Movie Toplist </p>
            </a>

        </div>
    );
};