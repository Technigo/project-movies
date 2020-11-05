import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../style/moviePeople.css'


const Crew = () => {

  const { movieId } = useParams();
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json, "crewList")
      setCrewList(json.crew)
    })
  }, [movieId]);

  return ( 
    <div className="cast-card-container">
      {crewList.map((crew) => (
        <article className="cast-cards"
        key={crew.credit_id}>
          <img 
            className="cast-image" 
            src={`https://image.tmdb.org/t/p/w185${crew.profile_path}`}
            alt={crew.name} 
          />
          <p>{crew.name}</p>
          <p>{crew.job}</p>
        </article>
      ))}
    </div>
   );
}
 
export default Crew;