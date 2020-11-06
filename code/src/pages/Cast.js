import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json, "castList")
      setCastList(json.cast)
    })
  }, [movieId]);
  return (
    <div className="display-card-container">
      {castList.map((cast) => (
        <Link 
          key={cast.id} 
          className="links" 
          to={`/profile/cast/${cast.id}`}>
          <article className="display-cards">
            <img 
              className="display-image" 
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name} 
            />
            <p>{cast.name}</p>
            <p className="role">{cast.character}</p>
          </article>
        </Link>
      ))}

    </div>
   );
};

export default Cast;
 