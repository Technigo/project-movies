import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';

const TVSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US')
      .then((res) => res.json())
      .then((data) => { setTvSeries(data.results) })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <section className="popular-movies-section">
      <h1 className="section-title">Top TV Series</h1>
      <div className="movie-grid-container">
        {tvSeries.map((show) => {
          return (
            <article className="movie-article" key={show.id}>
              <Link
                key={show.id}
                to={`/tv/${show.id}`}>
                <img src={`https://image.tmdb.org/t/p/w1280${show.poster_path}`} alt={show.title} />
                <div className="movie-details">
                  <h1>{show.name}</h1>
                  <p>First aired: {show.first_air_date}</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default TVSeries;