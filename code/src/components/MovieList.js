import React, { useEffect, useState } from "react";
import { LIST_URL } from "utils/urls";
import "./MovieList.css"

const MovieList = () => {
    // const [loading, setLoading] = useState(false)
    const [movieTitle, setMovieTitle] = useState([])

    useEffect(() => {
        fetch(LIST_URL)
            .then((res) => res.json())
            .then((data) => movieTitle(data))
    }, [])

    console.log(movieTitle)


    return (
        <div>
            Find me in src/app.js!
        </div>
    )
}

export default MovieList