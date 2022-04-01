import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BackIcon } from './Icon'

const ButtonText = styled.h3`
  color: white;
  font-size: 20px;
  margin: 0;
`

const GoBackButton = styled.button`

 padding: 10px; 
 width: 150px;
 margin: 30px;
 border-style: none;

 position: absolute;
 display: inline-flex;
 color: #fff;
 align-items: center;
 font-weight: 900;
 text-decoration: none;
 left: 40px;
 top: 20px;
 appearance: none;
 border: none;
 background-color: transparent;
 transition: 0.3s;
 font-size: 20px;
 cursor: pointer;

 &: hover ${ButtonText} {
  transform: translateX(4px);
  transition: all 0.6s ease-in-out;
  display: flex;
 }

`

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
    <div className="detailPage">
      {detail && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path})` }}>
          <GoBackButton onClick={onBackButtonClick}><ButtonText>‹ Movies</ButtonText></GoBackButton>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`} alt="poster" />
            <div className="detailText">
              <h2>{detail.original_title} <span className="rating">{detail.vote_average}/10</span></h2>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

