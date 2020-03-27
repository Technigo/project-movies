import React from 'react'
// import { BrowserRouter, Switch, Router } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'

export const App = (props) => {
  const { popularMovies, setPopularMovies } = props
  return (
    // <BrowserRouter>
    //   <main>
    //     <Switch>
    //       <Router exact path="/">
    <MovieList popularMovies={popularMovies} setPopularMovies={setPopularMovies} />
    //       </Router>
    //       Find me in src/app.js!
    //     </Switch>
    //   </main>
    // </BrowserRouter>
  )
}
