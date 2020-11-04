import React from 'react';
import '../styles/Loader.css';

export const Loader = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      <div className="spinner"></div>
      <div className="spinner"></div>
    </div>
  );
};
