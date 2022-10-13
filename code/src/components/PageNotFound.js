import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Page Not Found! </h1>
      <button type="button" onClick={returnToDefaultPage}>Go back to the home page</button>
    </>
  );
}

export default PageNotFound;