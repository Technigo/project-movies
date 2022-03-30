import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ apiData }) => {

    return (
        apiData && apiData.map((movieItem) => {
            // const { title, backdrop_path, release_date } = movieItem
            return (
            <Link to={`/movie/${movieItem.id}`}>
                <div style={{backgroundColor: 'pink'}}>
                    <img src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`} alt="film poster"/>
                    <p>{movieItem.title}</p>
                    <p>Released {movieItem.release_date}</p>           
                </div>
            </Link>
        )
        })
    )
}
export default Movies