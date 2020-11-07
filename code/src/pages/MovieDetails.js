import LoadingSpinner from "components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { CompanyInfo } from "pages/CompanyInfo";
import { Link } from "@material-ui/core";
import { Button } from "components/Button";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState([]);
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
            <div
              className="background-img"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})`,
              }}
              alt={detail.title}
            >
              <img
                className="mini-poster"
                src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`}
                alt={detail.title}
              />
              <h1 className="movie-title">
                {detail.title}{" "}
                <span className="rating">{detail.vote_average}/10</span>
              </h1>

              <p className="text-overview">{detail.overview}</p>
            </div>
            <div>
              <h4>Produced by:</h4>
              {detail.production_companies.map((company) => (
                <Link key={company.id} to={`/company/${company.id}`}>
                  <li>
                    {company.name}
                    <i className="fas fa-chevron-circle-right"></i>
                  </li>
                </Link>
              ))}
            </div>
          </div>
          )
        </section>
      )}
    </main>
  );
};
