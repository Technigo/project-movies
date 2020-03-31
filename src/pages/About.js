import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './about.cssgi'

export const About = () => {
  const [about, setAbout] = useState({})
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/1771?api_key=1a0b43b3e6aab8215b964c141c11111b&language=en-US')
      .then((res) => res.json())
      .then((json) => {
        setAbout(json)
      })
  })

  return (
    <div className="about-page">
      hello
      <div className="movie-details">
        <h2>{about.biography}</h2>
      </div>

      <div className="back-link-button">
        <Link className="back-link" to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path>
          </svg>
          <p>Movies</p>
        </Link>
      </div>

    </div>
  )

}

