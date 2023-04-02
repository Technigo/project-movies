import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { API_KEY, imageURL } from 'utils/urls';
import { Loader } from './Loader'

export const GenreMovieList = () => {
  const [genreMovieList, setGenreMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const { genreId } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`)
      .then((res) => res.json())
      .then((data) => {
        setGenreMovieList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [genreId])
  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <section className="list">
      {genreMovieList.map((singleGenreMovie) => {
        return (
          <div key={singleGenreMovie.imdb_id} className="list-container">
            <img key={singleGenreMovie.revenue} className="list-img" src={singleGenreMovie.poster_path ? `${imageURL}/w1280/${singleGenreMovie.poster_path}` : ''} alt={singleGenreMovie.title} />
            <div className="test" key={singleGenreMovie.tagline}>
              <Link
                key={singleGenreMovie.vote_average}
                to={`/genre-list/:genreId/${singleGenreMovie.id}`}
                className="list-title">
                {singleGenreMovie.title}
              </Link>
              <Link
                key={singleGenreMovie.popularity}
                to={`/details/${singleGenreMovie.id}`}
                className="list-date">Release date: {singleGenreMovie.release_date}
              </Link>
            </div>
          </div>
        )
      })}
    </section>

  )
}
