import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({title, release_date}) => {

    return (
<Link to={`/movies/${title}`}>
    <section>
        <div key={title}>
            <h2>{title}</h2>
            <h3>{release_date}</h3>
        </div>
    </section>
</Link>
    )
}