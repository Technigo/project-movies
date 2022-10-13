import React from 'react';

// this is where the magic happens. We made our own loading spinner based on the best emoji
const RotatingPoo = () => {
  return (
    <div className="poo-container">
      <div className="loading">Hold your poo!</div>
      <div className="the-poo">💩</div>
    </div>
  )
}

export default RotatingPoo