import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f86cf72a5f604a49cde375a4fa2c6d61&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, [id]);

  return (
    <div className='details-container'>
      <div
        className='details-background-image'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
      ></div>
      <div className='details-summary-container'>
        <div className='back-link-container>'>
          <Link to='/' className='back-link'>
            <svg
              className='backlink-arrow'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 30 30'
            >
              <path
                d='M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z'
                fill='#fff'
                fill-rule='evenodd'
              ></path>
            </svg>
            Movies
          </Link>
          <img
            className='details-poster'
            src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
            alt='poster'
          />
        </div>
        <div className='details-texts'>
          <h1 className='details-title'>
            {details.original_title}{' '}
            <span className='details-rating'>{details.vote_average}/10</span>
          </h1>

          <p className='details-overview'>{details.overview}</p>
        </div>
      </div>
    </div>
  );
};
