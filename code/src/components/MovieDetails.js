import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
    const [details, setDetails] = useState({})

    const { info } = useParams()

    console.log("DETAILS API INFO HERE ", DETAILS_URL(info))

    useEffect(() => {
        fetch(DETAILS_URL(info))
        .then((res) => res.json())
        .then((data) => setDetails(data)) }, [])

    
    return (
    <div>
     {details.overview}
    </div>
    )
}
    

export default MovieDetails;