import React from 'react'
import { Link } from 'react-router-dom'

import './backbutton_style.css'

export const BackButton = () => {
  return (
    <section className="back-button-wrapper">
      <Link to="/">
        <div className="back-button" role="button" tabIndex="0" aria-pressed="false"> ◀︎ Back to movies</div>
      </Link>
    </section>

  )
}
