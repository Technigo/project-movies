
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIE_TRAILER_URL } from './urls';

export const Trailer = () => {
  const [trailer, setTrailer] = useState({})
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    fetch(MOVIE_TRAILER_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setTrailer(data.results[0].key)
        console.log('HDEREEEEEEEE')
        console.log(movieId)
        console.log(data)
      })
      .catch((e) => {
        console.error(e);
        navigate('/404');
      })
  }, [movieId, navigate])

  return (
    <div>
      <iframe
<<<<<<< HEAD
        title="Movie Trailer"
        width="500"
        height="300"
        src={`https://www.youtube.com/embed/${trailer}`} // Use the trailerKey prop
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture"
=======
        className="trailer-holder"
        title={trailer}
        width="500"
        height="300"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
>>>>>>> 867aa024b4a92d925220b82a71fea102fc0b1c2f
        allowFullScreen />
    </div>

  )
}
