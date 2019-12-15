import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProdCompDetails } from '../components/ProdCompDetails'
import { NotFound } from 'pages/NotFound'
import { GoBack } from 'components/GoBack'
import './prodCompanies.css'

export const ProdCompanies = () => {
    const { id } = useParams()
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/company/${id}?api_key=588b25e1c43b79eebc0f7d2f0c56a882&language=en-US`)
            .then(res => res.json())
            .then(json => {
                if (json.status_code === 34) {
                    setError(true)
                } else {
                    setCompany(json)
                }
                setLoading(false)
            })
    }, [id])

    if (error) {
        return <NotFound />
    }

    if (loading) {
        return <h1>LOADING</h1>
    }

    return (
        <section className="company">
            <GoBack />
            <div className="companyDetails">
                <div className="companyName">
                    <h1><a href={company.homepage}>{company.name}</a></h1>
                    {company.origin_country !== null ? <img src={`https://www.countryflags.io/${company.origin_country}/shiny/64.png`} alt="Country"></img> : ``}
                </div>
                <ProdCompDetails id={company.id} />
            </div>
        </section >
    )
}