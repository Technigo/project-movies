import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const onHomePageClick = () => {
        history.push('/');
    };
    const onPreviousPageClick = () => {
        history.goBack();
    };

    return (
        <div>
            <p>Sorry this page doesn't exist!</p>
            <button onClick={onHomePageClick}>Back to the homepage</button>
            <button onClick={onPreviousPageClick}>Back to Previouspage</button>
        </div>
    )
}
export default NotFound;