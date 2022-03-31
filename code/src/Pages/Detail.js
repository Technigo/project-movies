import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const GoBackButton = styled.button`
padding: 10px; 
`;

export const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState()
  const navigate = useNavigate()

  const onBackButtonClick = () => {
    // Use it to go back to previous page
    navigate(-1)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec7efa21217def88014fde963c7b7190&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setDetail(json)
      }, [id])
  })
  return (
    <article className="detailPage">
      {detail && (
        <div>
          <div className="background">
            <img src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`} alt="backdrop" />
          </div>
          <div className="summary">
            <GoBackButton onClick={onBackButtonClick}>GO BACK</GoBackButton>
            <img src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`} alt="poster" />
            <div className="detailText">
              <h2>{detail.original_title}</h2>
              <h4>{detail.vote_average}/10</h4>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}