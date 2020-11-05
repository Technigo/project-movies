import React from 'react';
import { Params, useParams } from 'react-router-dom'

const ListOfMovies = (cast) => {
  const { movieId} = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${cast.id}/combined_credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json, "castList")
      setCastList(json.cast)
    })
  }, [movieId]);

  return ( 

    <div>
      List of Movies
    </div>
   );
}
 
export default ListOfMovies;