import React, { usState, useEffect } from "react";

export const MovieList = () => {
  const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
  const url_Popular_Movies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch (url_Popular_Movies)
      .then((response) => response.json())
      .then ((json) => console.log(json.results));

      return (
        <section>Movies</section>
      )
};

