import React, { useEffect, useState } from "react";
import "./Listing.css";

import MovieCover from "../components/MovieCover";

const Listing = () => {
  const apiKey = "9afc6869d833b483aa834ef461668853";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Ropa på api asynkront
    fetch(URL, {
      method: "GET",
    })
      .then((raw) => {
        return raw.json();
      })

      .then((formatted) => {
        setMovieList(formatted.results);
      })

      .catch((e) => {
        console.log("Something went wrong", e);
      });
  }, [URL]); // Kolla om gotError har ändrats, kör igen i så fall

  return (
    <div className='container'>
      <div className='content'>
        <div className='listing'>
          {movieList.map((movie) => {
            return <MovieCover key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
