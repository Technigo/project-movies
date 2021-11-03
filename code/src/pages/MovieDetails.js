import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'

const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()
  // const history = useHistory()

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
    height: '100vh',
    zIndex: -1,
  }

  // const onBackLinkClick = () => {
  //   history.goBack()
  //   console.log(history)
  // }

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <section className='detail-container'>
          <>
            <Link to='/' className='detail-link'>
              {/* <button
              type='button'
              onClick={onBackLinkClick}
              className='detail-link'
            ></button> */}
              <span className='arrow'>&#10688;</span>
              Movies
            </Link>
            {/* {console.log('before img', details)} */}
            {/* <img
              src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
              alt={details.title}
            /> */}
            <div style={backgroundStyle} />
            <img
              src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
              alt={details.title}
              className='poster-details'
            />
            <div className='detail-description'>
              <h1>
                {details.title}&nbsp;&nbsp;
                <span className='detail-rating'>{details.vote_average}/10</span>
              </h1>
              <p>{details.overview}</p>
            </div>
          </>
        </section>
      )}
    </>
  )
}

export default MovieDetails
