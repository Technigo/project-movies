import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import BackButton from '../components/BackButton'

// [X] Name
// [X] logo
// [X] HQ
// [X] homepage



const Companies = () => {

    const [company, setCompany] = useState([])

    const { comp } = useParams()


    

    //https://api.themoviedb.org/3/company/174?api_key=2365aea36d60ef1f206bd1bdf23fd999
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/company/${comp}?api_key=2365aea36d60ef1f206bd1bdf23fd999`)
        .then((res) => res.json())
        .then((json) => setCompany(json))
    },[])

    console.log(company)

    //const pic = `https://image.tmdb.org/t/p/w300${company.logo_path}`
    // const pic = <img src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}  alt="name" />

    return (
        <>
            <div className="company-page-container-mobile">
            <div className="company-page">
                <BackButton />
                <h1>{company.name}</h1>
                <img className="company-logo" src={company.logo_path === null ? "../assets/company_logo_not_found.png" : `https://image.tmdb.org/t/p/w300${company.logo_path}`} alt={company.name}/>
                <h3>Headquarters <span>{company.headquarters}</span></h3>
                <h3> External Links <span>{company.homepage === "" ? "Company homepage not available": <a href="https://www.warnerbros.com" target="_blank">{company.name} Official Webpage</a> }</span></h3>
                
            </div>
        </div>

        <div className="company-page-container-desktop">
            <div className="company-page">
                <BackButton />
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

// <h3><a href="https://www.warnerbros.com" target="_blank">{company.name} Official Webpage</a></h3>

// <img className="company-logo" src={`https://image.tmdb.org/t/p/w300${company.logo_path}`} alt={`${company.name} logo`} />

// https://www.warnerbros.com

// https://image.tmdb.org/t/p/w300/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png