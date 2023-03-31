import React, { useEffect, useState } from 'react';
import Movies from './Movies'
import '../css/MovieList.css';

// This COMPONENT shows a list of popular movies
export const MovieList = () => {
// 'list' stores movie data, 'setList' updates the movie data with help of useState
// FYI:useSTATE decllares state variable that you can update directly.
// useState is a State Hook (they let you use state and other features without writing a class.)
// Inside paranthesis we use square brackets because we are fetching api to an ARRAY.
  const [list, setList] = useState([])

  // useState([]) as initializing the list state to be ready for storing an array of movie data,
  // and setList(data.results) as the action of putting the fetched content inside the
  // square brackets (i.e., updating the list state with the new movie data).

  // FetchMovies gets popular movies from an API
  const FetchMovies = () => {
    fetch('https://api.themoviedb.org/3/account/18557443/watchlist/tv?api_key=d120fe8810b0e45a06baa667dd3dc7fc&session_id=d2e64114dc41e5d2079593f40f511fba80818486')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
      })
  }
  // Here we use the setList function to update the list state
  // with the new array of movie data: setList(data.results).

  // To run an API request to themoviedb.org and fetch popular films etc
  // This runs FetchMovies when the component loads
  useEffect(() => {
    FetchMovies()
  }, [])
  // useEffect is a function that allows you to perform side effects,
  // like fetching data, when certain conditions change. In this code,
  // it is used to fetch movie data when the component first loads.

  // FetchMovies() is a function that fetches movie data from an API.
  // By putting FetchMovies() inside useEffect
  // we are telling the component to run this function when it first loads.

  // The empty array [] is passed as the second argument to useEffect.
  // This means that useEffect will run only once when the component is mounted
  // and not again when the component updates.
  // So, the movie data will be fetched only once when the component loads.

  // This part shows the movie list on the screen
  return (
    <main>
      {/* Loop through the list and display each movie */}
      {/* Call each of these mapped out "items" for now on with name "movie" */}
      {list.map((movie) => (
        <div
          className="movie-card">
          {/* Show a movie component with movie details */}
          <Movies
            title={movie.name}
            releaseDate={movie.first_air_date}
            movieId={movie.id}
            poster={movie.poster_path} />
          {/* movie.title for example points to title inside of movie */}
        </div>
      ))}
    </main>
  )
}