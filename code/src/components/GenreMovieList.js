import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export const GenreMovieList = () => {
  const [genreMovieList, setGenreMovieList] = useState([])
  const { genreId } = useParams()
  const navigate = useNavigate()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US&with_genres=${genreId}`)
      .then((res) => res.json())
      .then((data) => {
        setGenreMovieList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
  }, [genreId])

  return (
    <section>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      {genreMovieList.map((singleGenreMovie) => {
        return (
          <Link
            key={singleGenreMovie.id}
            to={`/genre-list/:genreId/${singleGenreMovie.id}`}
            className="list-element">{singleGenreMovie.title}
            <img src={singleGenreMovie.poster_path ? `https://image.tmdb.org/t/p/w185${singleGenreMovie.poster_path}` : ''} alt={singleGenreMovie.title} />
          </Link>
        )
      })}
    </section>

  )
}
