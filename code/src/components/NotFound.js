import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry this page does not exist</p>
      <button type="button" onClick={returnToDefaultPage}>go to default page</button>

    </div>
  );
}

export default NotFound;