import React, { useState, useEffect } from 'react'

import { NOWPLAYING_URL } from '../urls'
import { MoviePoster } from '../components/MoviePoster'
import '../styles/MovieList.css'

export const NowPlaying = () => {

    const [playingNow, setplayingNow] = useState([])

    useEffect(() => {
        fetch(NOWPLAYING_URL)
            .then(response => response.json())
            .then(json => setplayingNow(json.results))
    }, [])

    return (
        <section className="movies-list">
            {playingNow.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    {...movie}
                />
            ))}
        </section>

    )
}