import React from 'react';
import { backgroundImageURL } from '../urls.js'


export const TvShowDetails = ({ backdrop_path }) => {
    console.log(backdrop_path);
    return (
        <section 
          className="detail--container" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0, .7) 75%, rgba(0,0,0,.9) 100%), 
                              url(${backgroundImageURL}${backdrop_path}) `
            }} >
 
        </section>
    )
}