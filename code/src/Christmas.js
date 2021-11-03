import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import { ChristmasUrl } from "Urls";
import Moment from "react-moment";

const Christmas = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(ChristmasUrl)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .finally(setLoading(false));
  }, []);

  return (
    <div className="movieListContainer">
      {loading && <Loading />}
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <section className="contentBlock">
            <div className="overlay">
              <div className="movieListContent">
                <div className="textMovieList">
                  <h1>{movie.title}</h1>
      
                  <p>
                    Release date:
                    <Moment format="MM/DD">{movie.release_date}</Moment>
                  </p>
                </div>
              </div>
            </div>
            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          </section>
        </Link>
      ))}
    </div>
  );
};

export default Christmas;
