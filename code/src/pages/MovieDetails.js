import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { MOVIE_URL, POSTER_URL, BACKDROP_URL } from '../utils/urls'
import Loader from '../components/Loader'
import HomeButton from "../components/HomeButton"


const MovieDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const [movieDetails, setMovieDetails] = useState()

    useEffect(() => {
        fetch(MOVIE_URL(id))
            .then(res => res.json())
            .then(data => {
                if (data.status_message) {
                    history.push("/notfound")
                } else {
                    setMovieDetails(data)
                }
            })
            .catch(err => console.log(err))
    }, [id, history])

    // useEffect(() => {
    //     if (movieDetails && movieDetails.status_message === "The resource you requested could not be found.") {
    //         history.push("/notfound")
    //     }
    // }, [movieDetails, history])

    if (movieDetails === undefined) {
        return (<Loader />)
    }

    return (
        <div className="movie-details-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BACKDROP_URL(movieDetails.backdrop_path)})` }}>
            <HomeButton />
            <div className="movie-details-summary">
                <img className="movie-details-poster" src={POSTER_URL(movieDetails.poster_path)} alt={movieDetails.title} />
                <div className="movie-details">
                    <h2>{movieDetails.title}</h2>
                    <span className="movie-details-rating">{movieDetails.vote_average}/10</span>
                    <p>{movieDetails.overview}</p>
                    <Link to={`/cast/${movieDetails.id}`}><span>See the cast</span><img src="/icons/arrow-right-circle.svg" alt="arrow-icon" className="right-icon" /></Link>
                </div>
            </div>
        </div >
    )
}

export default MovieDetails

/*

adult: false
backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg"
belongs_to_collection: null
budget: 70000000
genres: (4) [{…}, {…}, {…}, {…}]
homepage: "https://www.hbomax.com/zacksnydersjusticeleague"
id: 791373
imdb_id: "tt12361974"
original_language: "en"
original_title: "Zack Snyder's Justice League"
overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
popularity: 9701.638
poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
production_companies: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2021-03-18"
revenue: 0
runtime: 242
spoken_languages: [{…}]
status: "Released"
tagline: ""
title: "Zack Snyder's Justice League"
video: false
vote_average: 8.6
vote_count: 4076
__proto__: Object

*/