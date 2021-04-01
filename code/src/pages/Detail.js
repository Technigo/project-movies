import React, { useState, useEffect } from 'react'
import { useParams, Route, Link } from 'react-router-dom'

import { API_DETAILS } from '../reusable/urls'
import Loading from '../components/Loading'

const Detail = () => {
  const [detailList, setDetailList] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading]= useState(true)
  const params = useParams()

  useEffect(() => {
    fetch(API_DETAILS(params.id))
      .then(response => response.json())
      .then(data => {
        if (data.success === false) {
          setErrorMessage(data.status_message)
        } else {
          setDetailList(data)
        }
      })
      .catch(err => setErrorMessage(true))

      setTimeout(()=>{
        setLoading(false)
      }, 1500)
  }, [params.id])

    if (errorMessage) {
      return (
        <div className="error">
          <img src="../favicon/404-error.svg" alt="error icon" />
          <h3>{errorMessage}</h3>
          <Route path="/">
            <Link to={"/"}>
              <button className="error-btn">
                Back to homepage
              </button>
            </Link>
          </Route>
        </div>
      )
    } 

  return (
    <article>
      {loading === true ? 
      <Loading/> :
      <>
      <div className="detail-background">
        <img
          className="movie-background-img"
          src={`https://image.tmdb.org/t/p/w1280${detailList.backdrop_path}`}
          alt={detailList.original_title}
        />
      </div>
      <div className="detail-information">
       {/* Link back to homepage with movie list */}
        <Route path="/">
          <Link className="home-page-link" to={"/"}>
            <img src="../favicon/button.svg" alt="button icon" />
            <h4 className="link-title">Movies</h4>
          </Link>
        </Route>
        {/* Link back to similar movie list */}
        <Route path="/movie/:id">
          <Link className="other-page-link" to= {`/similar/${params.id}`}>
            <img src="../favicon/button.svg" alt="button icom" />
            <h4 className="link-title">Alternative Titles</h4>
          </Link>
        </Route>
        <div className="detail-container">
          <img className="poster-img" src={`https://image.tmdb.org/t/p/w342${detailList.poster_path}`} alt={detailList.original_title} />
        
        <div className="detail-content">
          <div className="header-rating">
            <h2>{detailList.original_title}</h2>
            <h2 className="rating">{detailList.vote_average}/10</h2>
          </div>
          <p>{detailList.overview}</p>
        </div>
        </div>
      </div> 
      </>
      }
    </article>
  )
}

export default Detail