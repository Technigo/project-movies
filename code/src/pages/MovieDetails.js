import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {
  const { detailId } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${detailId}?api_key=7bad066f3ffa3daf68ae80d43ff12b31&language=en-US`

  const [title, setTitle] = useState()
  const [info, setInfo] = useState()
  const [website, setWebsite] = useState()
  const [bg, setBg] = useState()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => { setTitle(json.original_title) })
  }, [detailId])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => { setInfo(json.overview) })
  }, [detailId])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => { setWebsite(json.homepage) })
  }, [detailId])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
        .then((json) => { setBg(json.backdrop_path) })
  }, [detailId])

  return (
    <div className="bg">
          <img src={`https://image.tmdb.org/t/p/w1280${bg}`} alt="" />
      <div className="theInfo"><h2>{title}</h2>
        <h3>{info}</h3>
        <p><a href={website}>{website}</a></p>
      </div>
          <div className="back"><Link to={"/"}>Back to movies</Link></div>
    </div>

  )
}



