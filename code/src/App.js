import React, {useState} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import MovieList from 'components/MovieList'
import MovieDetail from 'components/MovieDetail'


export const App = () => {


  // THIS STATE IS SET TO STORE DATA AFTER FETCHING 1ST API, 
  // AND THEN BE USED AGAIN IN MOVIE DETAILS TO COMPARE PARAM AND MOVIEID
  const [movieList,setMovieList] = useState([]);
 

  return (


    ////// ROUTE TO NAVIGATE AROUND THE SITE

    /*
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MovieList movieList={movieList} setMovieList={setMovieList} />} />
        <Route path=':movieId' element={ <MovieDetail  movieList= {movieList}/>} />
        <Route path='*' element={ <NotFound />} />

      </Routes>
    </BrowserRouter>
    */
  )
}
