import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export const Details = () => {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US`)
          .then(res => res.json())
          .then(json => setMovie(json))
      }, [id])

      return (
        <div>
            {movie && (
                <div className="background-image" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
                    <div className="movie-details">
                        <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="details-text">
                            <h1 className="movie-detail-title">{movie.title}</h1> 
                            <p className="rating">{movie.vote_average} / 10</p>
                            <p className="overview">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

      )
}