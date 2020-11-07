import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack';

const CompanyHeader = ({ homepage, logo_path, name }) => {
  return (
    <header className="list-header">
      <ButtonBack className="button" />
      {/* <Link className="list-header__logo" to="/">
        <h1>CinemaTech</h1>
      </Link> */}
      {homepage ? (
        <a
          className="list-header__logo"
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo_path ? (
            <img
              className="list-header__image"
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
