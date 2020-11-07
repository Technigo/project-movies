import React from 'react';
import { Link } from 'react-router-dom';

import ButtonBack from './ButtonBack';

const MovieDetail = ({
  backdrop_path,
  poster_path,
  homepage,
  title,
  vote_average,
  tagline,
  overview,
  imdb_id,
  production_companies,
}) => {
  return (
    <main
      className="detail"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 23, 61, 0.2) 0, rgb(21, 23, 61) 70%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
      }}
    >
      <ButtonBack className={'button button-back'} />
      <section className="detail__info-container">
        <img
          className="detail__image"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={`${title}`}
        />
        <div>
          {homepage ? (
            <a
              className="detail__title"
              target="_blank"
              href={homepage}
              rel="noopener noreferrer"
            >
              <h2 className="detail__title">{title}</h2>
            </a>
          ) : (
            <h2 className="detail__title">{title}</h2>
          )}

          {tagline && <h3 className="detail__tagline">- {tagline} -</h3>}
          <p>
            <i className="detail__star fa fa-star"></i>
            <span className="detail__vote"> {vote_average}/10</span>
          </p>

          <p className="detail__overview">{overview}</p>
          <a
            className="detail__link"
            href={`https://www.imdb.com/title/${imdb_id}/`}
            target="blank"
          >
            <i className="detail__logo fa fa-imdb"></i>
          </a>
          <h4 className="detail__subheader">Production Companies: </h4>
          <div className="detail__company-container">
            {production_companies.map(company => (
              <Link
                className="detail__company"
                key={company.name}
                to={`/company/${company.id}`}
              >
                {company.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
