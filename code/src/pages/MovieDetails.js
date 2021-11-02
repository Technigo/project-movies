import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'

const MovieDetails = () => {
  // const params = useParams()
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  // console.log(params)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1cd9c12b0f59437cb1f892337285c32e&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .finally(() => setLoading(false))
  }, [movieId])

  // console.log('details:', details)

  const backgroundStyle = {
    backgroundImage: `url(
      https://image.tmdb.org/t/p/w1280${details.backdrop_path}
    )`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
  }

  return (
    <>
      <Link to='/'>
        <span>&#10688; Movies</span>
      </Link>
      {loading ? (
        <LoadingComponent />
      ) : (
        <section className='movie-container'>
          <>
            <h1>
              {details.title}
              <span>{details.vote_average}</span>
            </h1>
            <p>{details.overview}</p>
            {/* {console.log('before img', details)} */}
            {/* <img
              src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
              alt={details.title}
            /> */}
            <div style={backgroundStyle} />
            <img
              src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
              alt={details.title}
            />
          </>
        </section>
      )}
    </>
  )
}

export default MovieDetails
