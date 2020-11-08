import React, { useState, useEffect } from 'react'

import { UPCOMING_URL } from '../urls'
import { MoviePoster } from '../components/MoviePoster'
import '../styles/MovieList.css'

export const Upcoming = () => {

    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        fetch(UPCOMING_URL)
            .then(response => response.json())
            .then(json => setUpcoming(json.results))
    }, [])

    return (
        <section className="movies-list">
            {upcoming.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    {...movie}
                />
            ))}
        </section>

    )
}