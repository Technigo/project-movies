import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from 'utils/urls'
import BackButton from './BackButton'
import LoadPage from './LoadPage'

const MovieDetails = () => {
    const [movie, setMovie] = useState ([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()


    // SAVING THIS CODE FORE EDDIE AND ME TO COMPARE TO
    
    // useEffect(() => {
    //     fetch(DETAILS_URL(id))
    //     .then(res => res.json())
    //     .then(data => setMovie(data)
    // )}, [id])


    useEffect(() => {
        setLoading(true);
        fetch(DETAILS_URL(id))
        .then(res => res.json())
        .then((data) => {
            setTimeout(() => {
            setLoading(false)
            setMovie(data)
            }, 1200)
      })}, [])

    return (

        <div>
            {loading && <LoadPage />}
            <div key={movie.original_title}>
            <div className='background' style={{backgroundImage: movie.backdrop_path ? `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` : ''}} alt={movie.title}></div>
                <BackButton />
                <div className='posteranddetails'>
                    <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                    
                    <div className='text-content'>
                        <h1>{movie.original_title}</h1>
                        <p className='score'>{movie.vote_average} / 10</p>
                        <p className='description'>{movie.overview}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MovieDetails 
