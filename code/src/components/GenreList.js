import React, { useState, useEffect } from 'react';

export const GenreList = () => {
  const [genres, setGenres] = useState([])

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
      {genres.map((singleGenre) => {
        return (
          <p key={singleGenre.id}>{singleGenre.name}</p>
        )
      })}
    </section>

  )
}
