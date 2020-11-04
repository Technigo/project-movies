import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = ({ text }) => {
  const history = useHistory();

  return (
    <button type="button" onClick={() => history.goBack()}>
      <span>←</span>
      {text}
    </button>
  );
};
export default BackButton;
