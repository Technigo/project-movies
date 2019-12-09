import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Popular } from "components/Popular";

export const PopularList = () => {
  const [movies, setMovies] = useState([]);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f8c1be31e73a50dc5317ce4e3571f7a6&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        console.log(json.results);
      });
  }, []);

  // let style = { display: "none" };
  // if (visible) style.display = "block";

  return (
    <section className="movies">
      {movies.map(movie => (
        <Popular
          title={movie.title}
          image={movie.poster_path}
          date={movie.release_date}
          id={movie.id}
        />
      ))}
    </section>
  );
};

// <img
//               src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <div id="movie_details">
//               <h2>{movie.title}</h2>
//               <p>Released: {movie.release_date}</p>
//             </div>
