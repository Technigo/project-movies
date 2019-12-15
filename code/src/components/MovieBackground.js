import React from 'react'
import { Link } from 'react-router-dom'
import './movieBackground.css'

export const MovieBackground = (props) => {
    const { backdrop_path, poster_path, title, vote_average, overview, production_companies } = props.movie

    return (
        <div className="detailBackground" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}>
            <div className="summary">
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}></img>
                <div className="details">
                    <h1>{title}<span className="rating">{vote_average}/10</span></h1>
                    <p>{overview}</p>
                    {production_companies.length > 0 ?
                        <div className="production">
                            <p>Production companies ({production_companies.length})</p>
                            <ul>
                                {production_companies.map(company => (
                                    <Link key={company.id} to={`/companies/${company.id}`}>
                                        <li>{`${company.name} `} [&#187;]</li>
                                    </Link>
                                ))
                                }
                            </ul>
                        </div> : ``}
                </div>
            </div>
        </div>
    )
}