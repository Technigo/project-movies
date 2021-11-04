import React from 'react'
import './notFound.css'
import { useHistory } from 'react-router-dom'

export const NotFound = () => {
    const history = useHistory();

    const onHomePageRedirect = () => {
        history.push('/');
    };

    const onPreviousPageRedirect = () => {
        history.goBack();
    };
    return (
        <section className="notFound-container">
            <h1 className="notFound-title">Sorry, We can not find that movie in our data base</h1>
            <button className="notFound-button" onClick={onHomePageRedirect}>Return to home</button>
            <button className="notFound-button" onClick={onPreviousPageRedirect}>Go back</button>
            <img className="notFound-gif" src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" alt="Not Found" />
        </section>
    )
}
