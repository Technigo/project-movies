import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { LIST_URL } from "utils/urls";

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        fetch(LIST_URL)
        .then(res=> res.json())
        .then(data=> { 
            setMovieDetail(data.results)
        })
    }, [movieId])

  return (
    <div>
      {movieDetail.map((popular) => ( 
      <div key={popular.id}>
         <img className="card-images" src={`https://image.tmdb.org/t/p/w300${popular.poster_path}`} alt={popular.original_title}/>
         <img className="card-images" src={`https://image.tmdb.org/t/p/w1280${popular.backdrop_path}`} alt={popular.original_title}/>
         <p>{popular.original_title}</p>
         <p>{popular.vote_average}</p>
         <p>{popular.overview}</p>
         </div>
      ))}
    </div>     
  ) 
};
export default Detail;