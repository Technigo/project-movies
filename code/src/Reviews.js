import React, { useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import './filmdetail.css'
import './reviews.css'
import { ReactComponent as BackSvg } from "./back.svg"
import { ReactComponent as NextSvg } from "./next.svg"
export const Reviews = (props) => {
    const { films, recommendedFilms } = props
    const params = useParams()
    const [reviews, setReviews] = useState([])
    const [i, setI] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()


    const selectedFilm = films.find((film) => film.title === params.title) || recommendedFilms.find((film) => film.title === params.title)
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${selectedFilm.id}/reviews?api_key=11a30ee49cca0ec90b41dc63ab197a6d&language=en-US&page=1`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.results)
                setIsLoading(false)
            }
            )
    }, [])

    if (!selectedFilm || !reviews) {
        window.location.href = '/'
    }

    return (
        <section className="film-detail-container" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), 
            url(https://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})`
        }}>
            < article className="left-column" >
                <Link className="back-button" onClick={history.goBack}>
                    <BackSvg className="button-icon" />
                    <span className="back-text">Back</span>
                </Link>
                <img className="film-img" src={`https://image.tmdb.org/t/p/w342${selectedFilm.poster_path}`} alt={selectedFilm.title} />
            </article >

            <article className="right-column-review">
                {!isLoading &&
                    <div >
                        {reviews[i].content.length > 1000 &&
                            <p>{reviews[i].content.substr(0, 1000) + "..."}</p>}
                        {reviews[i].content.length < 1000 &&
                            <p>{reviews[i].content}</p>}
                        <p>{reviews[i].author}</p>
                        {reviews[i].content.length > 1000 &&
                            <p>Read full review <a className="review-link" href={reviews[i].url} target="_blank">here.</a></p>}
                    </div>}
                <div className="buttons-container">
                    {i != 0 &&
                        <button className="nav-button" onClick={() => setI(i - 1)}><BackSvg className="icon" />Back</button>}
                    {i != reviews.length - 1 &&
                        <button className="nav-button" onClick={() => setI(i + 1)}>Next<NextSvg className="icon" /></button>}
                </div>
                <p>{i + 1} of {reviews.length}</p>
            </article>
        </section >
    )
}