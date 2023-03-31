import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_TV_URL } from 'utils/urls';

export const TvList = ({ loading, setLoading }) => {
  const [tvList, setTvList] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(BASE_TV_URL)
      .then((response) => response.json())
      .then((data) => setTvList(data.results))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [setLoading])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <div className="list-wrapper">
      {tvList.map((singleTv) => {
        return (
          <div key={singleTv.id} style={{ position: 'relative' }}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${singleTv.poster_path}`} alt="tv poster" />
            <Link className="list-link" to={`/tvdetails/${singleTv.id}`}>
              <div className="single-item-child">
                <h2 style={{ margin: 0, width: '90%', display: 'flex', justifyContent: 'center' }}>{singleTv.name}</h2>
                <p>{singleTv.first_air_date}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};