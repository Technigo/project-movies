import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import PageNotFound from "./PageNotFound";

const apiKey = "995425e2e6cd0fcf599ff795098e1e8b";

export const CompanyInfo = () => {
  const [company, setCompany] = useState([]);
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

          <a href={company.homepage}>
            Visit {company.name}'s homepage{" "}
            <i className="fas fa-chevron-circle-right"></i>
          </a>
        </section>
      )}
    </main>
  );
};
