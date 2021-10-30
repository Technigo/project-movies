import React from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'

export const MovieDetails = () => {
    return (
        <section className="movieDetails-container" style={{ backgroundImage: "url(https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg)" }} >
            <Link to="/"> <div className="movieDetails-back"><i className="fas fa-chevron-circle-left"></i>Movies</div></Link>
            <div className="movieDetails-sumary">
                <img className="movieDetails-image" src="https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" alt="cartel" />
                <div className="movieDetails-text">
                    <h1 className="movieDetails-title">Snake Eyes: G.I. Joe Origins<span className="movieDetails-rating">6.8/10</span></h1>
                    <p className="movieDetails-sinopsis">Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.</p>
                </div>
            </div>
        </section>
    )
}
