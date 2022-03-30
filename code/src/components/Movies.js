import React from 'react'

const Movies = ({ apiData }) => {
    return(
        apiData && apiData.map(movieItem => {
            const { title, poster_path, release_date } = movieItem;
            // const backdrop = 'https://image.tmdb.org/t/p/w1280'
        return (
            <div style={{backgroundColor: 'pink'}}>
            <p>{title}</p>
            <p>Released {release_date}</p>
            {/* <img src={poster_path} />  */}
            </div>
        )
        })
    )
}

export default Movies