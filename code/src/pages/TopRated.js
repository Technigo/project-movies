import React, { useState, useEffect } from 'react'

import { TOPRATED_URL } from '../urls'
import { MoviePoster } from '../components/MoviePoster'
import '../styles/MovieList.css'

export const TopRated = () => {

    const [toprated, setToprated] = useState([])

    useEffect(() => {
        fetch(TOPRATED_URL)
            .then(response => response.json())
            .then(json => setToprated(json.results))
    }, [])

    return (
        <section className="movies-list">
            {toprated.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    {...movie}
                />
            ))}
        </section>
    )
}