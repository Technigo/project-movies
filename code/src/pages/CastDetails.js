import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CAST_URL } from '../utils/urls'
import Loader from "../components/Loader"
import CastProfile from "../components/CastProfile"
import HomeButton from "../components/HomeButton"

const CastDetails = () => {
  const { id } = useParams()
  const [cast, setCast] = useState()

  useEffect(() => {
    fetch(CAST_URL(id))
      .then(res => res.json())
      .then(data => setCast(data.cast))
  }, [id])

  if (cast === undefined) {
    return (<Loader />)
  }

  return (
    <div>
      <HomeButton />
      {cast.map(actor => (
        <CastProfile {...actor} key={actor.id} />
      ))}

    </div>
  )
}

export default CastDetails