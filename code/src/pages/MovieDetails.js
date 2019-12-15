import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BackArrow } from './icons/BackArrow'
import './moviedetails.css'

export const MovieDetails = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac808c841b715d85c8914a97d10f4cb3&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => {
                setDetails(json)
            })
    }, [id])

    return (
        <div className="movieBackground" style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`})` }}>
            <Link className="backLink" to="/">
                <BackArrow />MOVIES
                </Link>
            < div className="detailBox" >
                <img className="movieCover" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
                <div className="movieDetails">
                    <h1>{details.title} <span className="rating">{details.vote_average}</span></h1>
                    <p>{details.overview}</p>
                </div>
            </div >
        </div >
    )
}