import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import * as API from '../../api/Api';
import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [errorLoading, SetErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const id = isNaN(movieId);
  console.log('is not a number', id);

  useEffect(() => {
    // console.log(movieId);
    setIsLoading(true);
    API.getMovie(movieId)
      .then(data => {
        console.log('Data: ', data);
        setMovie(data);
        setIsLoading(false);
        SetErrorLoading(false);
      })
      .catch(err => {
        console.log('Error: ', err);
        setMovie({});
        SetErrorLoading(true);
      });
  }, [movieId]);

  TopBarProgress.config({
    barColors: {
      '0': '#ff0000',
      '1.0': '#ff0000'
    },
    shadowBlur: 5,
    barThickness: 2
  });

  console.log(errorLoading);

  if (errorLoading) {
    history.push('/');
  }

  return (
    <div>
      {isLoading ? (
        <div>
          <TopBarProgress />
        </div>
      ) : (
        <div>
          {errorLoading === false && (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
              }}
              className={styles.movieDetails}
            >
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <div className={styles.navigation}>
                    <Link to="/" className={styles.backLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
                          fill="#fff"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Movies</span>
                    </Link>
                  </div>
                  <div className={styles.movieInfoFlex}>
                    <div className={styles.movieOverview}>
                      <h2>{movie.original_title}</h2>
                      {/* <span>Rating: {Math.floor(movie.vote_average)}/10</span> */}
                      <p>{movie.overview}</p>
                    </div>
                    <div className={styles.moviePoster}>
                      <img
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        alt="poster"
                      />
                    </div>
                    {/* <div className={styles.movieExtra}>
                      <h2>Movie details</h2>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
