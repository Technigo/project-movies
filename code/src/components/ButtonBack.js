import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const ButtonBack = ({ className, text }) => {
  const history = useHistory();

  return (
    <>
      {className === 'button' && (
        <Link className={className} to="/">
          <div className="button__ornament button__ornament--vertical">
            <div className="button__ornament-top-bottom"></div>
            <div className="button__ornament-left-right"></div>
          </div>

          <div className="button__ornament button__ornament--horisontal">
            <div className="button__ornament-top-bottom"></div>
            <div className="button__ornament-left-right"></div>
          </div>
          <span className="button__label">{text}</span>
        </Link>
      )}
      {className === 'button button-back' && (
        <div className="button-container">
          <button
            className={className}
            type="button"
            onClick={() => history.goBack()}
          >
            <div className="button__ornament button__ornament--vertical">
              <div className="button__ornament-top-bottom"></div>
              <div className="button__ornament-left-right"></div>
            </div>

            <div className="button__ornament button__ornament--horisontal">
              <div className="button__ornament-top-bottom"></div>
              <div className="button__ornament-left-right"></div>
            </div>
            <span className="button__label--blue">{text}</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonBack;
