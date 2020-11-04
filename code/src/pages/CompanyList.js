import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';

import Error from '../components/Error';
import { API_KEY } from '../api.js';
import CompanyHeader from 'components/CompanyHeader';
import CompanyDetail from 'components/CompanyDetail';

const CompanyList = () => {
  const [companyMovies, setCompanyMovies] = useState([]);
  const { companyId } = useParams();
  //const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;
  const COMPANY_URL = `https://api.themoviedb.org/3/company/${companyId}?api_key=${API_KEY}`;

  // useEffect(() => {
  //   fetch(MOVIE_URL)
  //     .then(result => {
  //       if (result.ok) {
  //         return result.json();
  //       } else {
  //         throw new Error('404');
  //       }
  //     })
  //     .then(json => {
  //       console.log(json);
  //       const filteredArray = json.results.filter(
  //         movie => movie.poster_path != null
  //       );

  //       setCompanyMovies(filteredArray);
  //       setLoading(false);
  //       console.log(filteredArray);
  //     })
  //     .catch(() => {
  //       window.location.assign('/error');
  //     });
  // }, [companyId]);

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
        setCompanyMovies(json);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [COMPANY_URL]);

  // useEffect(() => {
  //   fetchCompanyMovieList();
  // }, [companyId]);

  // const fetchCompanyMovieList = () => {
  //   fetch(API_URL)
  //     .then(result => {
  //       if (result.ok) {
  //         return result.json();
  //       } else {
  //         throw new Error('404');
  //       }
  //     })
  //     .then(json => {
  //       console.log(json);
  //       const filteredArray = json.results.filter(
  //         movie => movie.poster_path != null
  //       );

  //       setCompanyMovies(filteredArray);
  //       setLoading(false);
  //       console.log(filteredArray);
  //     })
  //     .catch(() => {
  //       window.location.assign('/error');
  //     });
  // };
  return (
    <>
      <CompanyHeader {...companyMovies} />
      <main className="list">
        <CompanyDetail />
        {/* {isLoading && <Loader />}
      {!isLoading && (
        <>
          <CompanyHeader {...company}/>
          <CompanyMovies />
          {companyMovies.map(company => (
            <MovieThumb key={company.id} {...company} />
          ))}
        </>
      )} */}
      </main>
    </>
  );
};
export default CompanyList;
