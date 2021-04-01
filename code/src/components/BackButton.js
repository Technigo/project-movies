import React from 'react';
import { ReactComponent as BackIcon } from 'style/images/icon.svg'

import 'style/BackButton.css';

export const BackButton = () => {
    return (
        <div className="button-container">
            <div className="icon-svg">
            <BackIcon />
            </div>
            <p>Movies</p>
        </div>
    )
}