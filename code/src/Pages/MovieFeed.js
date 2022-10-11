import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieFeed = () => {
  const [posters, setPosters] = useState([]);
  console.log(posters);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4f32d41e25209822b9c7a73559fb2822&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => {
        setPosters(json.results);
      });
  }, []);

  return (
    <div className="poster-container">
      {posters.map((poster) => (
        <Link key={poster.id} to={`/posters/${poster.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${poster.poster_path}`}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieFeed;
