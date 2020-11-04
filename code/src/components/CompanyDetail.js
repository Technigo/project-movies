import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';

import Error from '../components/Error';
import Backbutton from '../components/Backbutton';
import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const CompanyDetail = () => {
  const [companyMovies, setCompanyMovies] = useState([]);
  const { companyId } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;

  useEffect(() => {
    fetch(MOVIE_URL)
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
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [MOVIE_URL]);

  return (
    <>
      <Backbutton text={'Go Back!'} />
      <div>
        {companyMovies.map(company => (
          <MovieThumb key={company.id} {...company} />
        ))}
      </div>
    </>
  );
};

export default CompanyDetail;
