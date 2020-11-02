import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ApiKey } from '../components/ApiKeys';
import { PosterImgUrl, BackdropImgUrl } from '../components/ApiUrls';
import Movie from '../components/Movie';

const MoviePage = ({ movies }) => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [coverImagePath, setCoverImagePath] = useState('');

  useEffect(() => {
    // const movieMatch = movies.find(
    //   (movie) => JSON.stringify(movie.id) === params.id
    // );

    // if (!movieMatch) {
    //   return <div>Not found!</div>;
    // }

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${ApiKey}&language=en-US`
    )
      .then((results) => results.json())
      .then((json) => {
        setMovieDetails(json);
        setCoverImagePath(json.backdrop_path);
      });
  }, [params.id, movies]);

  return (
    <section
      className="movie--wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BackdropImgUrl}${coverImagePath})`,
      }}
    >
      <Link className="movies--back-button" key={movies.id} to="/">
        <img
          alt="back-button"
          className="movies--back-button--img"
          src="../images/noun_back arrow_2223783.svg"
        />
        <span className="movies--back-button--text">Movies</span>
      </Link>
      <Movie
        posterImg={`${PosterImgUrl}${movieDetails.poster_path}`}
        title={movieDetails.title}
        rating={movieDetails.vote_average}
        description={movieDetails.overview}
      />
    </section>
  );
};

export default MoviePage;
