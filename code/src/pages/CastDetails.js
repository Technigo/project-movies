import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { CAST_URL } from '../utils/urls'
import Loader from "../components/Loader"
import CastProfile from "../components/CastProfile"
import HomeButton from "../components/HomeButton"

const CastDetails = () => {
  const { id } = useParams()
  const history = useHistory()
  const [cast, setCast] = useState()

  useEffect(() => {
    fetch(CAST_URL(id))
      .then(res => res.json())
      .then(data => {
        if (data.status_message) {
          console.log(data)
          setCast(data)
        } else if (data.cast) {
          setCast(data.cast)
        }
      })
  }, [id])

  // NOT WORKING :(

  useEffect(() => {
    if (cast && cast.status_message === "The resource you requested could not be found.") {
      console.log("inside useEffect for not found")
      history.push("/notfound")
    }
  }, [cast, history])

  if (cast === undefined) {
    return (<Loader />)
  }

  return (
    <section className="cast-details-container">
      <HomeButton />
      <div className="cast-details">
        {cast.map(actor => (
          <CastProfile {...actor} key={actor.id} />
        ))}
      </div>
    </section>
  )
}

export default CastDetails