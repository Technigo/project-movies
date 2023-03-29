import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export const Movies = ({ title, releaseDate, movieId, poster }) => {
 <>
 <Link to={`/details/${movieId}´}>
 <img src={`http://image.tmdb.org/t/p/w342${poster}`} alt="movie" />
<div>
      <h1>{title}</h1>
      <p>Release {releaseDate}</p>
      <p>HEJ HÄR ÄR JAG</p>
    </div>
     
</Link>
}