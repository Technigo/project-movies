import React from 'react';
import { BACKGROUND_IMAGE_URL, POSTER_IMAGE_URL } from '../urls.js';


export const TvShowDetails = ({ name, backdrop_path, poster_path }) => {
    console.log(backdrop_path);
    return (
        <section 
          className="detail--container" 
          style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, .7) 75%, 
                            rgba(0,0,0,.9) 100%), 
                            url(${BACKGROUND_IMAGE_URL}${backdrop_path})`
          }} 
        >
          <article className="detail_info--container">
              <img
                className="detal_info__image"
                src={`${POSTER_IMAGE_URL}${poster_path}`}
                alt={name}
              />
          </article>
        </section>
    )
}