import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Components
import Movie from '../components/Movie';
import Loading from '../components/Loading';

// API Urls
import { ApiKey } from '../components/ApiKeys';
import { PosterImgUrl, BackdropImgUrl } from '../components/ApiUrls';

// Styling
import 'assets/MoviePage.css';
import 'assets/MediaQueries.css';

const MoviePage = ({ movies }) => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState('');

  // Fetch details for selected movie
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${ApiKey}&language=en-US`
    )
      .then((results) => results.json())
      .then((json) => {
        setMovieDetails(json);
      });
  }, [params.id, movies]);

  return (() => {
    // Check if fetch is done and movieDetails have data
    // - else return Loader
    if (movieDetails) {
      return (
        <section
          className="movie--wrapper"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BackdropImgUrl}${movieDetails.backdrop_path})`,
          }}
        >
          {/* Returns the user to list of movies */}
          <Link className="movie--back-button" key={movies.id} to="/">
            <img
              alt="back-button"
              className="movie--back-button--img"
              src="../images/noun_back arrow_2223783.svg"
            />
            <span className="movie--back-button--text">Movies</span>
          </Link>

          {/* Movie component page with detailed info */}
          <Movie
            posterImg={`${PosterImgUrl}${movieDetails.poster_path}`}
            title={movieDetails.title}
            rating={movieDetails.vote_average}
            description={movieDetails.overview}
          />
        </section>
      );
    } else {
      return <Loading />; // Loader animation
    }
  })();
};

export default MoviePage;
