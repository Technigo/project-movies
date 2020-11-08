import React from 'react';

import { BackButton } from 'components/BackButton'
import Telescope from '../pages/assets/telescope.png'

import 'styles/notfound.css';


export const NotFound = () => {
    
    return (
        <section className='not-found'>
            <BackButton />
                <div className='not-found__message'>
                    <h1> Ooops... This page doesn't seem to exist. </h1>
                        <p> Bummer, but there are a lot of other movies to try!</p>
                </div>
                <img 
                className='not-found__image'
                src={Telescope}
                alt='telescope icon'
                />
                <p className='icon-text'>
                    Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
                </p>
        </section>
    );
};