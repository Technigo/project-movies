import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TV_SERIES_URL } from 'utils/urls';

export const Tvseries = () => {
  const [tvList, setTvList] = useState([]);

  useEffect(() => {
    fetch(TV_SERIES_URL)
      .then((response) => response.json())
      .then((data) => setTvList(data.results))
  }, [])

  return (
    <section className="tvListWrapper">
      <h1 className="popular-tv">Popular TV-Series</h1>
      <div className="popular-tv-container">
        {tvList.map((singleTv) => {
          return (
            <div className="tv-wrapper">
              <Link key={singleTv.id} to={`/tvdetails/${singleTv.id}`}>
                <img className="posterImg" src={`https://image.tmdb.org/t/p/w300${singleTv.poster_path}`} alt={singleTv.name} />
                <div className="hoverBox">
                  <h1 className="hoverTitle">{singleTv.original_name}</h1>
                  <p className="hoverDate">Release date: {singleTv.first_air_date}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
