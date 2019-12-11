import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}api_key=91be6b751a25062269fa48eb99e10f7a`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>LOADING</h1>
    }

    if (!movie) {
        return <h1>No movie</h1>
    }

    return <div>{movie && <div>{movie.title}</div>}</div>

}

