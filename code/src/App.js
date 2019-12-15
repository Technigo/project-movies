import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Popular } from 'Pages/Popular'
import { Details } from 'Pages/Details'
/* https://api.themoviedb.org/3/movie/550?api_key=0774e20c1c8bfc2f79af713d52e9832d

https://api.themoviedb.org/3/movie/popular?api_key=0774e20c1c8bfc2f79af713d52e9832d&language=en-US&page=1

https://api.themoviedb.org/3/movie/{movie_id}?api_key=0774e20c1c8bfc2f79af713d52e9832d&language=en-US

"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
ex : `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
https://api.themoviedb.org/3/configuration?api_key=0774e20c1c8bfc2f79af713d52e9832d
 */


export const App = () => (
  <Router>
    <Route path ="/" exact>
      <Popular />
    </Route>
    <Route path="/movies/:id">
      <Details />
    </Route>
  </Router>
)