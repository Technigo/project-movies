import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UPCOMING_URL } from 'utils/urls';

export const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(UPCOMING_URL)
      .then((response) => response.json())
      .then((data) => setUpcoming(data.results))
  }, [])

  return (
    <section className="upcomingWrapper">
      <h1 className="upcoming-soon">Upcoming soon</h1>
      <div className="upcoming-container">
        {upcoming.map((singleMovie) => {
          return (
            <div className="upcoming-wrapper">
              <Link key={singleMovie.id} to={`/upcomingdetails/${singleMovie.id}`}>
                <img className="posterImg" src={`https://image.tmdb.org/t/p/w300${singleMovie.poster_path}`} alt={singleMovie.title} />
                <div className="hoverBox">
                  <h1 className="hoverTitle">{singleMovie.original_title}</h1>
                  <p className="hoverDate">Release date: {singleMovie.release_date}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
