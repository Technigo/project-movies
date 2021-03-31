import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Styled/Button'

const ReturnButton = ({ path }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(path)
  }

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <i className="fa fa-arrow-left" /> Back
      </Button>
    </>
  );
};

export default ReturnButton;
