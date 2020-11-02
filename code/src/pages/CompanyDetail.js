import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { API_KEY } from '../api.js';

const CompanyDetail = () => {
  const [companies, setCompanies] = useState();
  const { companyId } = useParams();
  //const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
  //const CompanyURL = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=with_companies=${companyId}`;
  //const CompanyURL =
  //'https://api.themoviedb.org/3/discover/movie?api_key=175ffd5710eba9b52b1d7f46de42a152&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=11395';
  useEffect(() => {
    fetchProductionCompanies(companyId);
  }, [companyId]);
  const fetchProductionCompanies = companyId => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`
    )
      .then(res => res.json())
      .then(json => {
        setCompanies(json.results);
        console.log(json);
      });
  };
  return (
    <main>
      {companies && (
        <section className="movie-container">
          {companies.map(company => (
            <article key={company.id}>
              <Link to={`/movies/${company.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${company.poster_path}`}
                  alt={`${company.id}`}
                />
                <div className="movie-information">
                  <h2>{company.title}</h2>
                  <p className="release-date">{`Released ${company.release_date}`}</p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};
export default CompanyDetail;
