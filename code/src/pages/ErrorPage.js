import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Image404 } from "../media/Page404.svg"
import { ReactComponent as Arrow } from "../media/arrow5.svg"
import "./css/ErrorPage.css"

export const ErrorPage = (props) => {
  return (
    <div className="not-found">
      <Image404 />
      <h1>{props.message}</h1>
      <div className="back-button">
        <Link to={"/"}>
          <Arrow />
          <p>Go back to movies</p>
        </Link>
      </div>

    </div>
  )
}