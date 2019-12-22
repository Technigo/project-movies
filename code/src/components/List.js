import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'css/list.css'

const apiKey = '90c3a659c8de7934c5e0377754707bd6'

export const List = () => {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState("popular")
    
    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setMovies(json.results)
        })
    }, [category])
    
    return (
        <section className="listPage">
          <header>
            <h1>Movie Night</h1>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="popular">Popular</option>
              <option value="top_rated">Top Rated</option>
              <option value="upcoming">Upcoming</option>
              <option value="now_playing">Now on Cinema</option>
            </select>
          </header>
          <section className="movieList">
            {movies.map(movie => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <img
                  alt="movieCard"
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                />
                <div className="listDetails">
                  <h1>{movie.title}</h1>
                  <span className="rating">{movie.vote_average}/10</span>
                  <p>Released {movie.release_date}</p>
                </div>
              </Link>
            ))}
          </section>
        </section>
      )
    }