import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";


const PopularList = () => {
    const [movie,setMovie] = useState([])
  

    useEffect = (() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca3b31f06bb62989bbf688f342bd0dcb&language=en-US&page=1')
        .then((res)=> res.json())
        .then((json)=> { 
            setMovie(json.results)
        })

    }, [])

  return ( 

    <main> 
        {movie.map((popular) => ( 
            <div key={popular.id}>
                <h3>{popular.original_title}</h3>
                <h1>Hello can you see me!</h1>
                <h3>
            <Link to={`/movie/${popular.id}`}>{popular.title}</Link>
          </h3>
            </div>
        ))}
        
        </main>
  )
  
};
export default PopularList;