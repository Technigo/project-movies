import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = ({ text, className }) => {
  const history = useHistory();

  return (
    <button
      className={className}
      type="button"
      onClick={() => history.goBack()}
    >
      <span>←</span>
      {text}
    </button>
  );
};
export default BackButton;
