import React from "react"

import { PROFILE_URL } from '../utils/urls'

const CastProfile = ({ id, name, character, profile_path }) => {
    return (
        <div>
            <h3>{name} - {character}</h3>
            {profile_path !== null && <img src={PROFILE_URL(profile_path)} alt={name} />}
        </div>
    )
}
export default CastProfile