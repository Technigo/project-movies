import React from 'react';
import {Link} from 'react-router-dom'


export const AlbumCard = ({ release_date, id, poster_path, original_title, vote_average}) => {
    return (
      
<Link to ={`/movie-details/${id}`} className="a-tag"> 
    <section className="card-section"> 
        <div className="card-wrapper">
            <img className="details-img" 
                src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title}/>  
            <p className=" details-div">
                <h1 className="details-title" >{original_title}</h1>
                <h3 className="details-release" >Released: {release_date}</h3>
            </p>
        </div>  
    </section>
</Link>      
    )
}