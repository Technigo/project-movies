/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Loader } from './Loader';
import { GENRE_URL, imageURL } from 'utils/urls';

export const GenreList = ({ popularMovielist }) => {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${GENRE_URL}`)
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

  const a = Math.floor(Math.random() * popularMovielist.length);
  const b = Math.floor(Math.random() * popularMovielist.length);
  const c = Math.floor(Math.random() * popularMovielist.length);
  const d = Math.floor(Math.random() * popularMovielist.length);

  return (
    <section className="genre-wrapper">
      <div className="image-wrapper">
        <img className="genre-background" src={popularMovielist[a]?.backdrop_path ? `${imageURL}/w1280/${popularMovielist[a].backdrop_path}` : ""} alt={popularMovielist[a]?.title || ""} />
        <img className="genre-background" src={popularMovielist[b]?.backdrop_path ? `${imageURL}/w1280/${popularMovielist[b].backdrop_path}` : ""} alt={popularMovielist[b]?.title || ""} />
        <img className="genre-background" src={popularMovielist[c]?.backdrop_path ? `${imageURL}/w1280/${popularMovielist[c].backdrop_path}` : ""} alt={popularMovielist[c]?.title || ""} />
        <img className="genre-background" src={popularMovielist[d]?.backdrop_path ? `${imageURL}/w1280/${popularMovielist[d].backdrop_path}` : ""} alt={popularMovielist[d]?.title || ""} />
      </div>
      <div className="genre-list-items">
        {genres.map((singleGenre) => {
          return (
            <Link
              key={singleGenre.name}
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
