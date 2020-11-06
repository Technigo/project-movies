import React from 'react';

// Styling
import 'assets/Loading.css';

// ----------------------------------------------------------------------------------------

const Loading = () => {
  return (
    <div className="spinner--wrapper">
      <div className="spinner">
        <div className="first">
          <div className="ball"></div>
        </div>
        <div className="second">
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
        <div className="third">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
