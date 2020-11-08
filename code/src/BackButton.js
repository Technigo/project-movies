import React from 'react'

import { useHistory } from "react-router-dom";

export const BackButton =({text}) => {
  const history = useHistory();

  return (
    <button className="link-back" type="button" onClick={ () => history.goBack()}>
      {text}
    </button>
  );
}