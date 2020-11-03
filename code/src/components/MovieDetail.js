import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({
  backdrop_path,
  title,
  vote_average,
  overview,
  genres,
  production_companies,
}) => {
  return (
    <section
      className="detail"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="detail__info-container">
        <h2>
          {title}
          <span className="detail__vote">{vote_average}/10</span>
        </h2>
        <p>{overview}</p>
      </div>
      <div>
        <p>Genres: </p>
        {genres.map(genre => (
          <Link key={genre.name} to={`/genre/${genre.id}`}>
            <ul>
              <li>{genre.name}</li>
            </ul>
          </Link>
        ))}
      </div>
      <div>
        <p>Production Companies: </p>
        {production_companies.map(company => (
          <Link key={company.name} to={`/company/${company.id}`}>
            <p>{company.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieDetail;
