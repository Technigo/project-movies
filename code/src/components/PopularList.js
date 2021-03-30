import React, { useEffect, useState } from 'react'

import { API_URL, POSTER_URL } from '../utils/urls'

const PopularList = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        console.log(API_URL)
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])


    return (
        <section>
            {popularMovies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={POSTER_URL(movie.poster_path)} alt={movie.title} />
                    <p>{movie.release_date}</p>
                </div>
            ))}
        </section>
    )
}

export default PopularList