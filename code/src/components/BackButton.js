import React from 'react';
import { Link } from 'react-router-dom';

import { BackArrow } from '../components/BackArrow';

import '../styles/BackButton.css';

export const BackButton = ({ path, text }) => {
  return (
    <div className="back-button-wrapper">
      <Link to={path} className="back-button-link">
        <BackArrow />
        <p>{text}</p>
      </Link>
    </div>
  );
};
