import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.production.min"

const Popular = ({movies}) => {

    return (
        <section className="popular-page">
            {movies.map((movie => {
                console.log(movie)
                return <div key={movie.title}>

                <div className="movie-text-group">   
                <Link className="details" to="{/movies/${movie.id}">
                <img className="img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <h1>{movie.title}</h1>
                    <p>Released {movie.release_date}</p>
                </Link>
             
                    </div>
                </div>
            }))}
         
        </section>


    )
}

export default Popular