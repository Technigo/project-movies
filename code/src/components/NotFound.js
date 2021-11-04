import React from "react"
import { useHistory } from "react-router-dom"

const NotFound = () => {
  const history = useHistory()

  const onButtonClick = () => {
    history.push("/")
  }
  return (
    <section>
      <div className="not-found">
        <p>Seems like this page doesn't exist..</p>

        <button className="not-found-btn" onClick={onButtonClick}>
          <span className="back-arrow" role="img" aria-label="arrow"></span>{" "}
          Back to home page
        </button>
      </div>
      <footer>
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </footer>
    </section>
  )
}

export default NotFound
