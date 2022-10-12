/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=124871c87c46d6e667f133342d66de5c&language=en-US`)
      .then((res) => res.json())
      .then((json) => { setDetails(json) })
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  if (loading) {
    return (
      <>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='black' />
      </>
    );
  }

  return (
    <section className='movie-details'>
      <Link to='/' className='backLink'>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />Movies
      </Link>
      <div className='details'>
        <h1>{details.title}</h1>
        <h2><img src='/icons/star-icon.svg' id='star-icon' alt='rating' />{Math.round(details.vote_average * 10) / 10}</h2>
        <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <h3>Summary</h3>
        <p>{details.overview}</p>

        {details.belongs_to_collection !== null
        && <div id='collection'>
          <p>
            <Link to={`/collection/${details.belongs_to_collection.id}`}>More from this collection <img src='/icons/more-icon.svg' id='more-icon' alt='more' /></Link>
          </p>
        </div>}

      </div>
    </section>
  );
}
