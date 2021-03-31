import React, { useState, useEffect } from "react"

import { MOVIES_URL } from "reusable/urls"


export const MovieList = () => {    
    const [movies, setMovies] = useState([])

//poster_path, original_title, release_date

    useEffect(() => {
        fetch (MOVIES_URL)
        .then(res => res.json())
        .then(json => setMovies(json.results))  
        .catch(err => console.error(err))   
    }, [])
    
    return ( 
        <>
            <section className="movie-list">
                Movies List: {movies.original_title}
            </section>
        </> 
    )
        
}


        

    

