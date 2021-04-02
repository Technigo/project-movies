import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API_URL_MOVIES } from '../reusables/Urls'
import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'

const MovieList = ({ movies, setMovies, chosenList, setChosenList }) => {
  const {list} = useParams()

  useEffect(() => {
    fetch(API_URL_MOVIES(list))
      .then(response => response.json())
      .then((json) => {
        setMovies(json.results)
        setChosenList(list)
      })
      .catch(err => console.error(err))
  }, [list, setMovies, setChosenList])


  console.log(chosenList)

  return (
    <>
      <TopBar 
        list={list}
        chosenList={chosenList}
      />
      <section className="movies-section">
        {movies.map(movie => <MovieCard list={list} key={movie.id} {...movie} />)}
      </section>
    </>
  )
}

export default MovieList