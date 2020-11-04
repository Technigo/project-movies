import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { id } = useParams()

    return (
        <section className='movie-details'>{id}</section>
    )
}