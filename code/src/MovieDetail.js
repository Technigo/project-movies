import React, { useState, useEffect } from "react";
import {ReactComponent as BackLogo} from "./images/backLogo.svg";
import { useParams, useHistory, Link } from "react-router-dom";


export const MovieDetail = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState({});
  const history = useHistory();

  console.log(history)

  const MOVIE_URL =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=a00dc273fb1eaa2bb4a4e6fed9fe4289&language=en-US";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a00dc273fb1eaa2bb4a4e6fed9fe4289&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [movieId]);

  const handleClick = () => history.push("/")

  return (
    <section className="detail-page">
      <div
        className="detail-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})`,
        }}
      >
<Link className="back-link" onClick={handleClick}><BackLogo style={{ width: "30px" }}/>
      Movies
    </Link>
        <div className="detail-summary">
          <img
            className="detail-poster"
            src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`}
          />
          <div className="detail-text">
              <h1 className="detail-title">{detail.title}<span className="detail-rating">{detail.vote_average} / 10</span></h1>
              <p className="detail-overview">{detail.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
