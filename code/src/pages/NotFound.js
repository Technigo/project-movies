import React from 'react'
import { GoBack } from 'components/GoBack'
import './notFound.css'

export const NotFound = () => {
    return (
        <main className="notFound">
            <GoBack />
            <article>
                <h1>Uh Oh! There's no one here...Should we go back?</h1>
                <img src="../images/not-found.jpg" alt="Movie not found"></img>
                {/** Photo by Felix Mooneeram on Unsplash**/}
            </article>
        </main >
    )
}