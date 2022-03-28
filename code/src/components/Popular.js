import React from "react"
import { Link } from "react-router-dom"

const Popular = ({movies}) => {
    return (
        <section>
            {movies.map((movie => {
                <Link to="{/movies/${movie.id}"><div key={movie.original_title}>{movie.original_title}</div></Link>
            }))}
         
        </section>


    )
}

export default Popular