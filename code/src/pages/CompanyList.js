import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Backbutton from '../components/Backbutton';
import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const CompanyList = () => {
  const [isLoading, setLoading] = useState(true);
  const [companyMovies, setCompanyMovies] = useState([]);
  const { companyId, movieId } = useParams();
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;

  useEffect(() => {
    fetchCompanyMovieList();
  }, [companyId]);

  const fetchCompanyMovieList = () => {
    fetch(API_URL)
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
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  };
  return (
    <main className="list">
      {/* <Link className="link-back" to={`/movies/${movieId}`}>
        Back to movie
      </Link> */}
      <Backbutton path={`/movies/${movieId}`} text={'Go Back!'} />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {companyMovies.map(company => (
            <MovieThumb key={company.id} {...company} />
          ))}
        </>
      )}
    </main>
  );
};
export default CompanyList;
