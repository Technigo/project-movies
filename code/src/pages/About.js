import React from 'react'
import './about.css'
import { Nav } from 'components/Nav'

export const About = () => {
  return (
    <>
      <Nav />
      <div className="about-wrapper">
        <section className="about-container">
          <h2 className="about-title">Project Movies</h2>
          <p className="about-text">This site is a multi-page React application made during the Technigo frontend boot camp. The application is based on the Movie Database API and two lists made by me for this project.</p>
        </section>
      </div>
    </>
  )
}