import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from 'components/Movie';

const List = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setListItem(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="movie-list">
      {listItem.map((movie) => {
        return (
          <Link className="movies" key={movie.id} to={`/details/:${movie.title}`}>
            {/* {movie.title} */}
            <Movie
              name={movie.title}
              poster={movie.poster_path}
              backdrop={movie.backdrop_path}
              overview={movie.overview}
              average={movie.vote_average} />
          </Link>
        )
      })}

    </div>
  )
}

export default List;