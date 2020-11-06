import React, { useEffect, useState} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { API_KEY } from 'urls'; 
import { MovieThumbSimilar } from 'components/MovieThumbSimilar';
import 'styles/moviedetail.css';
import { Loader } from 'components/Loader';
import { BackButton } from 'components/BackButton';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fecthing detailed information for the choosen movie
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        return  res.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  const [similarmovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setSimilarMovies(json.results)
        setLoading(false);
      })
  }, [id]);

  // Adds loader while the page is loading and until the API is loaded
  if (loading === true) {
    return <Loader />;
  // Check wheather the movie picture is in the API or not, 
  // if not in this API list the user comes to the Not Found page. 
  // where it is possible to go back to the home page.
  } else if (movies.success === false) {
    return <Redirect to="/404" />;
  } else {
    // If not led to this error page return the movie details: 
    return (
      <main 
        className="background-picture" 
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}
      >
        <section className="detailed-card">
          <BackButton key={movies.key}/>
          <div className="picture-text-rating-wrapper">
            <img 
                src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} 
                alt={movies.title} 
                className="detail-poster-image"
            />
            <div className="text-rating-overview-wrapper">
              <div className="top-info">
                <h2 className="movie-heading">{movies.title} 
                  <span className={movies.vote_average > 8.0 ? "rating high" : "rating low"}>{movies.vote_average}/10</span>
                </h2>
              </div>
              <p className="overview">{movies.overview}</p>
            </div>    
          </div>
        </section>
        <section className="similar-movies-container">
          {similarmovies.length > 0 && <h3 className="similar-movies-heading">Similar movies to {movies.title}:</h3>}
          <div>
            {similarmovies.map((movie) => (
              <MovieThumbSimilar key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </main>
    );
  };
};