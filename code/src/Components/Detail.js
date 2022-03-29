import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { DETAIL_URL } from "utils/urls";

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        fetch(DETAIL_URL, (movieId))
        .then(res=> res.json())
        .then(data=> { 
            setMovieDetail(data)
        })
    }, [])

  return (
    <div>
      {movieDetail.title}
         Detail
         </div>

  ) 
};
export default Detail;