import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';
import Movie from '../components/Movie'

const Details = () => {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

  // Function that fetches the specific movie-information abouth the selected movie
  useEffect(() => {
    setLoading(true)
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((response) => response.json())
      .then((data) => setListItem(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [movieId])

  // Function that enables the user to go back to the previous page
  const goBack = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <p>Page is loading...</p>
    )
  }

  return (
    <section
      className="background-image"
      // This is all the styling for the background image, none in the css-file
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${listItem.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh' }}>

      <button type="button" className="back-btn" onClick={goBack}>
      ↩️ Go back
      </button>
      <Movie
        name={listItem.title}
        poster={listItem.poster_path}
        overview={listItem.overview}
        // Makes the vote-average into a number with just one decimal
        average={String(Math.round(listItem.vote_average * 10) / 10)} />
    </section>
  )
}

export default Details;