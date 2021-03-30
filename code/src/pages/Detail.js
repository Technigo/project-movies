import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { API_DETAILS } from '../reusable/urls'

const Detail = () => {
  const [detailList, setDetailList] = useState([])
  const params = useParams()

  useEffect(() => {
    fetchDetailList()
  }, [])

  const fetchDetailList = () => {
    fetch(API_DETAILS(params.id))
      .then(response => response.json())
      .then(data => setDetailList(data))
  }

  return (
    <article>
      <div className="background">
        <img className="background-img" src={`https://image.tmdb.org/t/p/w1280${detailList.backdrop_path}`} alt={detailList.original_title} />
      </div>
      <div className="other-information">
        <div>
          <Link className="link" to={`/`}>
           <img src="../favicon/button.svg"/>
            Movies
          </Link>
        </div>
        <div className="test">
          <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${detailList.poster_path}`} alt={detailList.original_title}/>
          </div>
            <div className="detail-content">
            <div className="header-rating">
              <h2>{detailList.original_title}</h2>
              <h2 className="raiting">{detailList.vote_average}/10</h2>
            </div>
            <p>{detailList.overview}</p>
          </div>

      </div>
    </article>
  )
}

export default Detail