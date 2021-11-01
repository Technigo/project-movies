import React, { useState, useEffect } from 'react'


const MovieDetails = () => {
    const [details, setDetails] = useState ([])

    useEffect(() => {
        fetch(DETAILS_URL)
        .then(res => res.json())
        .then(data => {
            setDetails(data.movie[0])
        })
    }, [movie.id])

    return (


    )
}


export default MovieDetails 