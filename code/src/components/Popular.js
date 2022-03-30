import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { MOVIES_URL } from 'utils/urls'

//styled components
const Popularpage = styled.div`
    display: flex;
    flex-wrap: wrap;
` 

const Popular = () => {

    const [movieList, setMovieList] = useState([])

    //moved fetch here since we want the fetch to happen only when this Route (/) opens and not for every visit on our website.

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [])

    return (
        <Popularpage>
     
            {movieList.map((movie => {
                return (
                    <div key={movie.title}>
                        <div className="movie-text-group">
                            <Link className="details" to={`/movies/${movie.id}`}>
                                <img className="img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                                <h1>{movie.title}</h1>
                                <p>Released {movie.release_date}</p>
                            </Link>

                        </div>
                    </div>
                )
                
            }))}
           </Popularpage>
    )
}

export default Popular