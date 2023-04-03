import React from 'react';
import { useNavigate } from 'react-router-dom';

// This component shows a "not found" message
export const NotFound = () => {
// 'navigate' helps us change pages
// useNavigate is a hook from 'react-router-dom' that gives us a 'navigate' function.

  const navigate = useNavigate();

  // This function takes us back to the home page
  const returnToHomePage = () => {
    navigate('/');
  }

  // Calling 'navigate' with a path, like '/',
  // will change the page without a refresh.

  // This part shows the "not found" message and a button on the screen
  return (
    <div className="not-found">
      {/* Display a message saying no movies found */}
      <p>Sorry, no movies here!</p>
      {/* Create a button to go back to the home page */}
      <button type="button" onClick={returnToHomePage}>Back to home page</button>
    </div>
  );
}