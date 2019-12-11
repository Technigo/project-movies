import React from "react"
import { useLocation } from "react-router-dom";

export const NoMatch = () => {
  let location = useLocation()

  return (
    <div>
      <h3>
        Sorry, no match for {location.pathname}
      </h3>
    </div>
  )
}