import LoadingSpinner from "components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=995425e2e6cd0fcf599ff795098e1e8b&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34) {
          setError(true);
        } else {
          setDetail(json);
        }
        setLoading(false);
      });
  }, [movieId]);

  return (
    <main>
      {loading && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <section className="details">
          <div key={detail.id}>
            <img
              className="background-img"
              src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
              alt={detail.original_title}
            />
            <h1 className="movie-title">
              {detail.original_title} <span>{detail.vote_average}/10</span>
            </h1>

            <p className="text-overview">{detail.overview}</p>
          </div>
          )
        </section>
      )}
    </main>
  );
};
