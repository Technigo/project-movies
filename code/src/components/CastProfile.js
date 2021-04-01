import React from "react"

import { PROFILE_URL } from '../utils/urls'

const CastProfile = ({ name, character, profile_path }) => {
    if (profile_path === null) {
        return null
    }
    return (
        <div className="cast-profile">
            <h3>{name} - {character}</h3>
            <img src={PROFILE_URL(profile_path)} alt={name} />
        </div>
    )
}
export default CastProfile