import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-overlay'>
      <div className='loading-spinner' />
      <blockquote className='loading-text'>
        "Oh yes, there will be blood."
      </blockquote>
    </div>
  );
};

export default Loading;
