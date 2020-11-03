import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const CompanyList = () => {
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [companies, setCompanies] = useState();
  const { companyId } = useParams();
  //const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
  //const CompanyURL = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=with_companies=${companyId}`;
  //const CompanyURL =
  //'https://api.themoviedb.org/3/discover/movie?api_key=175ffd5710eba9b52b1d7f46de42a152&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=11395';
  useEffect(() => {
    fetchCompanyList(companyId);
  }, [companyId]);

  const fetchCompanyList = companyId => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.success === false) {
          setError(true);
          console.log(json);
        } else {
          setCompanies(json.results);
          console.log(json);
        }
        setLoading(false);
      });
  };
  return (
    <main>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && !error && (
        <section className="movie-container">
          {companies.map(company => (
            <MovieThumb key={company.id} {...company} />
          ))}
        </section>
      )}
    </main>
  );
};
export default CompanyList;
