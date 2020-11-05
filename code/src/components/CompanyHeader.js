import React from 'react';

//import '../styles/styles.scss';

const CompanyHeader = ({ homepage, logo_path, name }) => {
  return (
    <header>
      {homepage ? (
        <a href={homepage} target="_blank" rel="noopener noreferrer">
          {logo_path ? (
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w185/${logo_path}`}
              alt={name}
            />
          ) : (
            <h2>{name}</h2>
          )}
        </a>
      ) : (
        <>
          {logo_path ? (
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w92/${logo_path}`}
              alt={name}
            />
          ) : (
            <h2>{name}</h2>
          )}
        </>
      )}
    </header>
  );
};

export default CompanyHeader;
