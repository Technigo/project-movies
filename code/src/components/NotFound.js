import React from 'react';
import { useNavigate } from 'react-router-dom';

// If something goes wrong with the navigation the user is directed to this page, with
// a button that enables the user to return to the list-page
const NotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/');
  }

  return (
    <div className="not-found">
      <p>Page not found</p>
      <button type="button" onClick={returnToDefaultPage}>
        Go to default page
      </button>
    </div>
  )
}

export default NotFound;