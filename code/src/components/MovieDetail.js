import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  tagline,
  overview,
  imdb_id,
  genres,
  production_companies,
}) => {
  const { movieId } = useParams();

  return (
    <section
      className="detail"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="detail__info-container">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={`${title}`}
        />
        <div>
          <h2>
            {title}
            <span className="detail__vote">{vote_average}/10</span>
          </h2>
          <h3>{tagline}</h3>
          <p>{overview}</p>
          <a href={`https://www.imdb.com/title/${imdb_id}/`} target="blank">
            Imdb
          </a>
        </div>
      </div>
      {/* <div>
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
          <Link
            key={company.name}
            to={`/movies/${movieId}/company/${company.id}`}
          >
            <p>{company.name}</p>
          </Link>
        ))}
      </div> */}
    </section>
  );
};

export default MovieDetail;
