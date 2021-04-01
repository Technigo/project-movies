import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { SEARCH_API } from '../reusables/urls'

import { MovieCard } from '../components/MovieCard'

export const Search = () => {

  const [search, setSearch] = useState('')
  const [id, setId] = useState([])


const onNewSearch = (event) => {
  setSearch(event.target.value)
}

const onSearchSubmit = (event) => {
  event.preventDefault()
  console.log('Submitted!')
  fetch(SEARCH_API(search))
  .then(res => res.json())
  .then(json => setId(json.results))
  .catch(err => console.err(err))
}


  return (
    <>
    <section className="search-wrapper">
    <label>
    <input className="search-field"
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={onNewSearch} 
    />
    </label>
    <button className="search-button" onClick={onSearchSubmit} type="submit">
    <i className="fa fa-search fa-lg"></i>
    </button>
    </section>
    
{id.length !== 0 && ( 
  <>
    <h2 className="list-title">Search results</h2>
    <section className="movie-list">
      {id.slice(0, 8).map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        <MovieCard {...movie} />
      </Link>
      ))}
    </section>
  </>
)}

</>

  )

}