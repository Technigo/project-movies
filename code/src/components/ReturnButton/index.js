import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Styled/Button';

const ReturnButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Button>
    </>
  );
};

export default ReturnButton;
