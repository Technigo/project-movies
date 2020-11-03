import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({ path, text }) => {
  return (
    <Link className="button" to={path}>
      <button type="button">
        <span>←</span>
        {text}
      </button>
    </Link>
  );
};
export default BackButton;
