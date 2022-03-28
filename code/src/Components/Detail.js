import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState([])
    const { movieId } = useParams()

    useEffect = (() => {
        fetch(`https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=ca3b31f06bb62989bbf688f342bd0dcb&language=en-US&page=1`)
        .then((res)=> res.json())
        .then((json)=> { 
            setMovieDetail(json.results)
        })
    }, [movieId])


  return (
    <div>
         Detail
         </div>

  ) 
};
export default Detail;