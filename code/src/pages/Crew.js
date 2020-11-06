import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

const Crew = () => {
  const { movieId } = useParams();
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    console.log("hellooo")
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json, "crewList")
      setCrewList(json.crew)
    })
  }, [movieId]);

  return ( 
    <div className="display-card-container">
      {crewList.map((crew) => (
        <Link 
          className="links" 
          to={`/profile/crew/${crew.id}`}>
          <article key={crew.id} className="display-cards">
            <img 
              className="display-image" 
              src={`https://image.tmdb.org/t/p/w185${crew.profile_path}`}
              alt={crew.name} 
            />
            <p>{crew.name}</p>
            <p className="role">{crew.job}</p>
          </article>
        </Link>
      ))}
    </div>
   );
}
 
export default Crew;