import Header from 'components/Header'
import Footer from './Footer'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MOVIES_URL } from 'utils/urls'
import LoadPage from './LoadPage'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    

    // SAVING THIS CODE FORE EDDIE AND ME TO COMPARE TO
    
    // useEffect(() => {
    //   setLoading(true)
    //   fetch(MOVIES_URL)
    //   .then(res => res.json())
    //   .then(data => setMovies(data.results))
    //   .finally(() => setLoading(false))
    // }, []) 

    useEffect(() => {
        setLoading(true);
        fetch(MOVIES_URL)
        .then(res => res.json())
        .then((data) => {
            setTimeout(() => {
            setLoading(false)
            setMovies(data.results)
            }, 1200)
      })}, [])

    return (
        <>
        {loading && <LoadPage />}
        <Header />
        <main className="movie-container">
            {movies.map((movie) => (
                <div key={movie.id} className='movie-item'>
                    <Link to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>
                        <div className='overlay'>
                            <div className='movie-details'>
                                <h3>{movie.original_title}</h3>
                                <h4>{movie.release_date}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
))}
        </main> 
        <Footer />
        </>

    )
}


export default Movies