import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../movieList.css'

const MovieList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=c77f0f257b1db8c5cdfe593182e32f79&language=en-US&page=1')
        .then((res) => res.json())
        .then((data) => setList(data.results))
        .catch((e) => {
          console.error(e)
        })
        .finally(() => {
          setLoading(false);
        })
    }, 1700)
  }, []);

  return (
    <>
      <Header setList={setList} />
      <div className="mainWrapper">
        {!loading && list.map((movies) => {
          return (
            <Link key={movies.id} to={`/details/${movies.id}`}>
              <img alt="img" className="listPosterImg" src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} />
              <div className="eachMovie">
                <h2 className="listMovieTitle">{movies.original_title}</h2>
                <p className="releaseDate">{movies.release_date}</p>
              </div>
            </Link>
          )
        })}
      </div>
      {loading && (
        <div className="loadingWrapper">
          <img alt="loading" className="loadingImg" src="https://media.tenor.com/CLVR-rgpQL8AAAAi/popcorn-joypixels.gif" />
          <p className="loadingText">Grab your popcorn, movies coming up!</p>
        </div>
      )}
    </>
  )
}

export default MovieList;