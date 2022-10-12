/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';

export const ReleasesDetails = () => {
  const [release, setRelease] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=124871c87c46d6e667f133342d66de5c&language=en-US`)
      .then((res) => res.json())
      .then((data) => setRelease(data))
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
    <section className='release-details'>
      <Link to='/newReleases' className='backLink'>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />New Releases
      </Link>
      <div className='details'>
        <h1>{release.original_title}</h1>
        <img src={`https://image.tmdb.org/t/p/w342${release.poster_path}`} alt={release.original_title} />
        <h3>Summary</h3>
        <p>{release.overview}</p>
      </div>
    </section>
  );
}
