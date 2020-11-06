import React from 'react';
import { useHistory } from 'react-router-dom';

const Backbutton = ({ className }) => {
  const history = useHistory();

  return (
    <div className={className}>
      <button className="button" type="button" onClick={() => history.goBack()}>
        <div className="button__ornament button__ornament--vertical">
          <div className="button__ornament-top-bottom"></div>
          <div className="button__ornament-left-right"></div>
        </div>

        <div className="button__ornament button__ornament--horisontal">
          <div className="button__ornament-top-bottom"></div>
          <div className="button__ornament-left-right"></div>
        </div>
        <span className="button__label">CinemaTech</span>
      </button>
    </div>
  );
};

export default Backbutton;
