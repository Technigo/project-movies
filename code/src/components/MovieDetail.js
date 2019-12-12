import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'components/MovieDetail.css'


// const api_key = 'd6f26682ba4bf575c167473c911bdd4c';

export const MovieDetail = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d6f26682ba4bf575c167473c911bdd4c&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
                console.log(json)
            })
    }, [movieId])

    if (!movie) {
        return <div>Loading...</div>
    }


    return (
        <div>

            <div className="review-container">
                <Link className="back-link" to={`/`}>
                    {/* <button type="button"> */}
                    <svg className="back-link-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
                    <p>Movies</p>
                    {/* </button> */}
                </Link>

                <img className="background-img" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="Movie poster" />

                <div className="review-section">
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie poster" />
                    <div className="text-field">
                        <div className="title-vote">
                            <h1>{movie.title}</h1>
                            <span>{movie.vote_average}/10</span>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}