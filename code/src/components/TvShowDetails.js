import React from 'react';
import { BACKGROUND_IMAGE_URL, POSTER_IMAGE_URL } from '../urls.js';

export const TvShowDetails = ({ name, backdrop_path, poster_path, vote_average, overview }) => {
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
                className="detail_info__image"
                src={`${POSTER_IMAGE_URL}${poster_path}`}
                alt={name}
              />
              <div className="detail_info__textbox">
                  <h1 className="detail_info_textbox__heading">{name}
                    <span className="detail_info_textbox__heading red__text">{vote_average}/10</span>
                  </h1>
                  <p className="detail_info_textbox__text">{overview}</p>
              </div>
          </article>
        </section>
    )
}