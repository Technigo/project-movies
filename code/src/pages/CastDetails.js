import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { CAST_URL } from '../utils/urls'
import Loader from "../components/Loader"
import CastProfile from "../components/CastProfile"
import HomePath from "../components/HomePath"

const CastDetails = () => {
  const { id } = useParams()
  const history = useHistory()
  const [cast, setCast] = useState()

  useEffect(() => {
    fetch(CAST_URL(id))
      .then(res => res.json())
      .then(data => {
        if (data.status_message) {
          history.push("/notfound")
        } else {
          setCast(data.cast)
        }
      })
  }, [id, history])

  if (cast === undefined) {
    return (<Loader />)
  }

  return (
    <section className="cast-details-container">
      <HomePath />
      <div className="cast-details">
        {cast.map(actor => (
          <CastProfile {...actor} key={actor.id} />
        ))}
      </div>
    </section>
  )
}

export default CastDetails