import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { MOVIE_URL, POSTER_URL, BACKDROP_URL } from '../utils/urls'


const MovieDetails = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        fetch(MOVIE_URL(id))
            .then(res => res.json())
            .then(data => setMovieDetails(data))
    }, [id])


    return (
        <div style={{ backgroundImage: `url(${BACKDROP_URL(movieDetails.backdrop_path)})` }}>
            <Link to="/">
                <img src="./icons/arrow-left-circle.svg" alt="arrow-icon" />
                Movies</Link>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.vote_average}</p>
            <p>{movieDetails.overview}</p>
            <img src={POSTER_URL(movieDetails.poster_path)} alt={movieDetails.title} />

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