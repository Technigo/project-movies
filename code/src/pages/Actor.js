import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Actor = () => {

  const { movieId, actorID } = useParams();
  console.log(movieId, actorID);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
   .then((res) => res.json())
   .then((json) => {
     console.log("change in actor");
     console.log(json);
     setActor(json);
   })
  },[actorID])

return (
  <section className="actor-main-content">

  
  <div className="actor-container">
      <Link className="link-back" to={`/movies/${movieId}`}><span role="img" aria-label="back-arrow">⬅️ </span>Back to movie</Link>
     <div className="actor-text">
     <h1>{actor.name}</h1>
     <a className="imdb-link" href={`https://www.imdb.com/name/${actor.imdb_id }/`} alt="imdb-link" target="_blank" rel="noopener noreferrer">IMDB <span role="img" aria-label="link-emoji">🔗</span> </a>
    
      <p>{actor.biography === "" ? "We don't have a lot of information on this actor yet.": actor.biography }</p>
      
     </div>
     <div className="actor-portrait">
  
     <img className="actor-poster" src= {actor.profile_path !== null ? `https://image.tmdb.org/t/p/w342${actor.profile_path}` : 
    `https://images.unsplash.com/photo-1519400197429-404ae1a1e184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80`} alt={actor.name} />
       
     </div>
     
  </div></section>
)
}