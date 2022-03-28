import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.production.min"

const Popular = ({movies}) => {

    return (
        <section className="movie-list">
            {movies.map((movie => {
                console.log(movie)
                return <div key={movie.title}>
                   
                <Link className="movie-title" to="{/movies/${movie.id}">
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                </Link>
                    <h1>{movie.title}</h1>
                    <p>Released {movie.release_date}</p>
              
                </div>
            }))}
         
        </section>


    )
}

export default Popular