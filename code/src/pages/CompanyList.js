import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import { API_KEY } from '../api.js';
import CompanyHeader from '../components/CompanyHeader';
import Backbutton from '../components/Backbutton';
//import BackButton from '../components/BackButton';
import MovieThumb from '../components/MovieThumb';

const CompanyList = () => {
  const [isLoading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);
  const [companyMovies, setCompanyMovies] = useState([]);
  const { companyId } = useParams();

  const COMPANY_URL = `https://api.themoviedb.org/3/company/${companyId}?api_key=${API_KEY}`;
  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;

  useEffect(() => {
    fetch(COMPANY_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        console.log(json);
        setCompany(json);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [COMPANY_URL]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        console.log(json);
        const filteredArray = json.results.filter(
          movie => movie.poster_path != null
        );
        setCompanyMovies(filteredArray);
        console.log(filteredArray);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [MOVIES_URL]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <CompanyHeader {...company} />
          <main className="list">
            <Backbutton />
            {companyMovies.map(company => (
              <MovieThumb key={company.id} {...company} />
            ))}
          </main>
        </>
      )}
    </>
  );
};
export default CompanyList;
