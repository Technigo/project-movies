import React from "react";
import { BACKGROUND_IMAGE_URL, POSTER_IMAGE_URL } from "../urls.js";
import { LastEpisodeDetails } from "./LastEpisodeDetails.js";

export const TvShowDetails = ({
  name,
  backdrop_path,
  poster_path,
  vote_average,
  overview,
  number_of_seasons,
  last_episode_to_air,
}) => {
  console.log({ name });
  return (
    <section
      className="detail--container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, .7) 75%, 
                            rgba(0,0,0,.9) 100%), 
                            url(${BACKGROUND_IMAGE_URL}${backdrop_path})`,
      }}
    >
      <article className="detail-info--container">
        <img
          className="detail_info__image"
          src={`${POSTER_IMAGE_URL}${poster_path}`}
          alt={name}
        />
        <div className="detail_info__textbox">
          <div className="detail_info_textbox__overview">
            <h1 className="detail_info_overview_textbox__heading">
              {name}, season {number_of_seasons}
              <span className="detail_info_overview_textbox__heading red__text">
                {vote_average}/10
              </span>
            </h1>
            <p className="detail_info_textbox__text">{overview}</p>
          </div>
          <div className="detail_info_textbox__latest-details">
            <LastEpisodeDetails {...last_episode_to_air} />
          </div>
        </div>
      </article>
    </section>
  );
};
