import PopularList from "components/PopularList";
import React from "react";
// const API_KEY = f7e0c4070f4665dbae6d58fba626cfe4;

// *Fetching popular movies for the list page*
// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// *Fetching popular movies for movies details page*
// const URL = `https://api.themoviedb.org/3/movie/{movie_id}?${API_KEY}={api_key}&language=en-US`

export const App = () => {
  return <PopularList />;
};
