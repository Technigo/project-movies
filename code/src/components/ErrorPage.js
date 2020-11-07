import React  from 'react'

import {BackLink} from 'components/BackLink'

export const ErrorPage = () => {
    return (
        <section className="error-section">
            <BackLink />
            <h2>Sorry we can't find what you are looking for</h2>
        </section>
    )
}