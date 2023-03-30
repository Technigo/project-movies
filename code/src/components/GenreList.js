import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const GenreList = () => {
  const [genres, setGenres] = useState([])
  const navigate = useNavigate()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
  }, [])

  return (
    <section>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      {genres.map((singleGenre) => {
        return (
          <Link
            key={singleGenre.id}
            to={`/genre-list/${singleGenre.id}`}
            className="list-element">{singleGenre.name}
          </Link>
        )
      })}
    </section>

  )
}
