import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Movie from '../components/Movie'

const Details = (/* { movieList } */) => {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  // const params = useParams(); // Version1
  const { movieName } = useParams(); // Version2; rekommenderat!
  const navigate = useNavigate();

  useEffect(() => {
    if (loading === false) {
      fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US`)
        .then((response) => response.json())
        .then((data) => setListItem(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${listItem.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh' }}>

      <button type="button" onClick={goBack}>Go back</button>
      <Movie
        name={listItem.title}
        poster={listItem.poster_path}
        overview={listItem.overview}
        average={listItem.vote_average} />
    </div>
  )
}

export default Details;