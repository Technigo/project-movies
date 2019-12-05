import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
  // console.log(props.name)
  const { movieId } = useParams();
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2cd0162b203bf54d75948b07b61d634f&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        console.log(movieId);
        console.log(json);

      });
  }, [movieId]);
  const bkgrHttps = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
  const bkgrImage = {
    backgroundImage: `url(${bkgrHttps})`
  }

  return (
    <div className="moviePage">
    <a className="backLink" href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
    Movies
    </a>
        <div className="background" style={bkgrImage}>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title}/>
            <div className="details">
              <h1>{movie.title}<span className="rating">{movie.vote_average}/10</span></h1>
              <p className="overView">{movie.overview}</p>
            </div>
          </div>
        </div>

    </div>
  );
};
// ``
//  export default Movie
