import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import BackButton from '../components/BackButton'





const Companies = () => {

    const [company, setCompany] = useState([])

    const { id } = useParams()

    //https://api.themoviedb.org/3/company/174?api_key=2365aea36d60ef1f206bd1bdf23fd999
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/company/${id}?api_key=2365aea36d60ef1f206bd1bdf23fd999`)
        .then((res) => res.json())
        .then((json) => setCompany(json))
        console.log(company)
    },[company])

    console.log(company)

    return (
        <div>
            <BackButton />
         <h1>Company</h1>
        </div>
    )
}

export default Companies