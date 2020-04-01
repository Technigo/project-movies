import React from 'react';
import {Link} from 'react-router-dom'


export const AlbumCard = ({ id, poster_path, original_title, vote_average}) => {
    return (
      
    

        <Link to ={`/movie-details/${id}`} className="a-tag"> 
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title} />  
            <div className=" details-div">
                <h1>HELLO CARD COMPONENT!!</h1>
                <h2> {original_title} </h2> 
                <h3>{vote_average}</h3>
            </div>
        </Link>
   
      
    )
}