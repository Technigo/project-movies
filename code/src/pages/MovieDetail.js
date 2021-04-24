import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import Company from '../pages/Companies'

import BackButton from '../components/BackButton'
const MovieDetail = () => {
    const { id } = useParams()
    const history = useHistory()
    const [details, setDetails] = useState([])
    const [statusCode, setStatusCode] = useState(200)
    const [loading, setLoading] = useState(true)
    const [prodComp, setProdComp] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US`)
        .then((res) => {
            setStatusCode(res.status)
            setLoading(false)
            return res.json()  
        }
        )
        .then((json) => {
            setDetails(json)
            setProdComp(json.production_companies)
        })
    },[])
    useEffect(() => {
        if (statusCode !== 200 || id.length > 19) {
            history.push("/error")
        }
    }, [history, statusCode, id])

    if (loading === true) {
        return (
            <div className="loading">
                <h1 className="loading-text">
                    loading...
                </h1>
            </div>
        )
    }
    return (
        <div className='details-wrapper' 
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`
            }}
        >
            <BackButton />
            <div className="details-content ">
                <div className="information-wrapper"> 
                    <div className="image-wrapper">     
                        <img src={details.poster_path === null ? "../assets/poster_not_found.png" : `https://image.tmdb.org/t/p/original${details.poster_path}`} alt={details.title}/>
                    </div>
                    <div className="text-wrapper">
                        <h1>{details.original_title}<span>{details.vote_average}/10</span></h1>
                        <p>{details.overview}</p>
                            <h3>Producers</h3>
                        <ul>
                            {prodComp.map(comp => {
                                return (
                                    <li>
                                        <Link to={`/companies/${comp.id}`}>
                                            {comp.name}
                                        </Link>
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail