import React from 'react'

import { useHistory } from "react-router-dom";
import arrowLeft from '../assets/ic_24_arrowLeft.svg'

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}>
            <img src={arrowLeft} alt="left chevron"/>
            <p>Back</p>
          </button>
        </>
    );
};