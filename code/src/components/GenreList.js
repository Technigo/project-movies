/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';

export const GenreList = ({ popularMovielist }) => {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <section className="genre-wrapper">
      <div className="image-wrapper">
        <img className="genre-background" src={popularMovielist[4]?.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${popularMovielist[4].backdrop_path}` : ""} alt={popularMovielist[4]?.title || ""} />
        <img className="genre-background" src={popularMovielist[8]?.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${popularMovielist[8].backdrop_path}` : ""} alt={popularMovielist[8]?.title || ""} />
        <img className="genre-background" src={popularMovielist[2]?.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${popularMovielist[2].backdrop_path}` : ""} alt={popularMovielist[2]?.title || ""} />
        <img className="genre-background" src={popularMovielist[5]?.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${popularMovielist[5].backdrop_path}` : ""} alt={popularMovielist[5]?.title || ""} />
      </div>
      <div className="genre-list-items">
        {genres.map((singleGenre) => {
          return (
            <Link
              key={singleGenre.id}
              to={`/genre-list/${singleGenre.id}`}
              className="genre-name">
              {singleGenre.name}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
