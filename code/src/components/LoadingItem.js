import React from 'react';

const LoadingItem = () => {
  return (
    <div className='spinner'>
      <div class='loader'>
        <div class='loader__filmstrip'></div>
        <p class='loader__text'>loading</p>
      </div>
    </div>
  );
};

export default LoadingItem;
