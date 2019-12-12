import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './detail.css'

export const Detail = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    const apiKey = "91be6b751a25062269fa48eb99e10f7a"


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
            })
    }, [id])


    if (!movie.id) {
        return (
            <section className="notFound">
                <h1>Movie not found</h1>
                <Link to="/">
                    {/* <button onClick={() => history.goBack()} type="button"> */}
                    <h2><i className="fas fa-chevron-circle-left" /> Back to list with movies</h2>
                    {/* </button> */}
                </Link>
            </section >
        )
    }

    //Return a background backdrop, smaller poster, title, voting, overview
    return (
        <section className="movieWrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
            <Link to="/">
                <div className="backToList"><i className="fas fa-chevron-circle-left" /> Movies</div>
            </Link>
            <section className="movieSummary">
                <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <div className="movieInfo">
                    <h1>{movie.title} <span className="voting">{movie.vote_average}/10</span></h1>
                    <p>{movie.overview}</p>
                </div>
            </section>
        </section >
    )

}

