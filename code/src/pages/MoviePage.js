import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Components
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import { BackButton } from '../components/BackButton';
import SimilarMoviesButton from '../components/SimilarMoviesButton';

// API Urls
import { APIKEY } from '../components/ApiKeys';
import { POSTER_IMG_URL, BACKDROP_IMG_URL } from '../components/ApiUrls';

// Styling
import 'assets/MoviePage.css';

// ----------------------------------------------------------------------------------------

const MoviePage = ({ movies }) => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState('');

  // Fetch details for selected movie
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${APIKEY}&language=en-US`
    )
      .then((results) => results.json())
      .then((json) => {
        setMovieDetails(json);
      });
  }, [params.id]);

  return (() => {
    // Check if fetch is done and movieDetails have data
    // or if fetch was not successful, return redirect to 404,
    // else return Loader
    if (movieDetails.id && !movieDetails.success) {
      return (
        <section
          className="movie--wrapper"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BACKDROP_IMG_URL}${movieDetails.backdrop_path})`,
          }}
        >
          {/* Buttons for moving back + to similar movies */}
          <div className="movie--buttons--wrapper">
            <BackButton />
            <SimilarMoviesButton />
          </div>

          {/* Movie component page with detailed info */}
          <Movie
            posterImg={`${POSTER_IMG_URL}${movieDetails.poster_path}`}
            title={movieDetails.title}
            rating={movieDetails.vote_average}
            description={movieDetails.overview}
          />
        </section>
      );
    } else if (movieDetails.success === false) {
      return <Redirect to="/404" />; // Error page
    } else {
      return <Loading />; // Loader animation
    }
  })();
};

export default MoviePage;
