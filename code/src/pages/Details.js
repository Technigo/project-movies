import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Movie from '../components/Movie'

const Details = (/* { movieList } */) => {
  const [listItem, setListItem] = useState([]);
  // const params = useParams(); // Version1
  const { movieName } = useParams(); // Version2; rekommenderat!
  const navigate = useNavigate();
  // const movieNameId = 760161

  useEffect(() => {
    console.log()
    fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US`)
      .then((response) => response.json())
      .then((data) => setListItem(data))
      .catch((error) => console.error(error));
  }, []);

  console.log('listItem.title', listItem.title)
  console.log('movieName', movieName)
  // movieList.find((movie) => (movie.title === movieName))

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <button type="button" onClick={goBack}>Go back</button>
      <Movie
        name={listItem.title}
        poster={listItem.poster_path}
        backdrop={listItem.backdrop_path}
        overview={listItem.overview}
        average={listItem.vote_average} />
    </div>
  )
}

export default Details;