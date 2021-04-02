import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../components/BackButton'

const Companies = () => {
    const [company, setCompany] = useState([])
    const { comp } = useParams()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/company/${comp}?api_key=2365aea36d60ef1f206bd1bdf23fd999`)
        .then((res) => res.json())
        .then((json) => setCompany(json))
    },[])
    return (
        <>
            <BackButton />
            <div className="company-page-container">
                
                <div className="company-page">
                    <h1>{company.name}</h1>
                    <img className="company-logo" src={company.logo_path === null ? "../assets/company_logo_not_found.png" : `https://image.tmdb.org/t/p/w300${company.logo_path}`} alt={company.name}/>
                    <h3>Headquarters <span>{company.headquarters}</span></h3>
                    <h3> External Links <span>{company.homepage === "" ? "Company homepage not available": <a href="https://www.warnerbros.com" target="_blank">{company.name} Official Webpage</a> }</span></h3>
                    
                </div>
            </div>
        </>
    )
}

export default Companies