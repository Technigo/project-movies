import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const GenreMovieList = () => {
  const [genreMovieList, setGenreMovieList] = useState([])
  const { genreId } = useParams()

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
    <section className="list">
      {genreMovieList.map((singleGenreMovie) => {
        return (
          <div key={singleGenreMovie.id} className="list-container">
            <Link
              key={singleGenreMovie.id}
              to={`/genre-list/:genreId/${singleGenreMovie.id}`}
              className="list-title">
              {singleGenreMovie.title}
            </Link>
            <img className="list-img" src={singleGenreMovie.poster_path ? `https://image.tmdb.org/t/p/w1280${singleGenreMovie.poster_path}` : ''} alt={singleGenreMovie.title} />
          </div>
        )
      })}
    </section>

  )
}
