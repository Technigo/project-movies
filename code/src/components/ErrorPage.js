import React  from 'react'

import {BackLink} from 'components/BackLink'

export const ErrorPage = () => {
    return (
        <section className="error-section">
            <h2>Sorry we can't fin what you are looking for</h2>
            <BackLink />
        </section>
    )
}