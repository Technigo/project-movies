import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const apiKey = "995425e2e6cd0fcf599ff795098e1e8b";

export const CompanyInfo = () => {
  const [company, setCompany] = useState([]);
  const [companymovies, setCompanyMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { companyId } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34) {
          setError(true);
        } else {
          setCompany(json);
        }
        setLoading(false);
      });
  }, [companyId]);
  console.log(company);

  useEffect(
    () => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_companies=${companyId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setCompanyMovies(json.results);
        });
    },
    [companyId],
    [companymovies]
  );
  console.log(companymovies);
  return (
    <main>
      {loading && <LoadingSpinner />}
      {error && <PageNotFound />}
      {!loading && !error && (
        <section>
          {company.logo_path === null ? (
            <h1>{company.name}</h1>
          ) : (
            <img
              className="logo"
              src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
              alt={company.name}
            />
          )}
          <div className="company-details">
            {" "}
            <p>Company headquarter: {company.headquarters}</p>
            <p>Country: {company.origin_country}</p>
            <a href={company.homepage}>Visit {company.name}'s homepage </a>
          </div>
          <div className="movie-list">
            {companymovies.map((company) => (
              <div className="movie" key={company.id}>
                <Link
                  className="movie-link"
                  to={`/movies/${company.id}`}
                  replace
                >
                  {company.poster_path === null ? (
                    <h1>{company.title}</h1>
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/w342${company.poster_path}`}
                      alt={company.title}
                    />
                  )}
                  <div className="movie-details">
                    <h1>{company.title}</h1>
                    <h2>Release: {company.release_date}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
