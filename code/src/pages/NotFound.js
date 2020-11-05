import React from 'react';
import { useHistory } from 'react-router-dom';

// Styling
import 'assets/NotFound.css';

// ----------------------------------------------------------------------------------------

const NotFound = () => {
  const history = useHistory();
  const handleButton = () => {
    history.push('/');
  };

  return (
    <section className="not-found--wrapper">
      <div className="not-found--message-box">
        <img
          className="not-found--message-img"
          src={process.env.PUBLIC_URL + '/images/noun_emotion_798837.svg'}
          alt="Not found"
        />
        <p className="not-found--message-text">
          Oops, this page was not found!
        </p>
        <button className="not-found--message-button" onClick={handleButton}>
          Take me back!
        </button>
      </div>
    </section>
  );
};

export default NotFound;
