import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { TVSHOW_URL } from 'utils/Urls'

export const TVseries = () => {
  const [tvShow, setTvShow] = useState([])

  useEffect(() => {
    fetch(TVSHOW_URL)
      .then((res) => res.json())
      .then((json) => setTvShow(json.results))
      .catch((error) => alert(error, 'error'))
  }, [])
}
//   return (
//   {tvShow.map((show) =>
//     <><div
//           className="movie-card"
//           key={show.id}
//           poster={show.poster_path}
//           showID={show.id} /><div>
//               )
//               }</></