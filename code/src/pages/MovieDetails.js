/*Outer Dependencies*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/*Inner Dependencies*/
import { ReturnButton } from 'components/ReturnButton';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  /*using id from the <Link> in Movie-list to make sure the fetch executes on the correct url*/
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
        <div className='link-poster-container'>
          <ReturnButton />
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
