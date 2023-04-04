/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieTrailers = () => {
  const { movieId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b6486ef7752f2120246f9cab35f64ece&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setVideo(data.results[0].key)
      })
  }, [movieId])
  console.log(video)

  return (
    <div className="video-wrapper">
      <iframe
        title="movie trailer"
        className="video"
        width="400"
        height="200"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${video}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture"
        allowFullScreen />
    </div>
  )
}

export default MovieTrailers;
