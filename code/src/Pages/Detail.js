import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const GoBackButton = styled.button`
padding: 10px; 
color: white;
background-color: gray;
font-style: helvetica;
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
          <GoBackButton onClick={onBackButtonClick}>Go back</GoBackButton>
          <h2>{detail.original_title}</h2>
          <h3>{detail.vote_average}/10</h3>
          <p>{detail.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`} alt="poster" />
          <img src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`} alt="backdrop" />
        </div>
      )}
    </article>
  )
}