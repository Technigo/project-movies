import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  const onGoToHomeButtonClick = () => {
    navigate('/')
  }
  const goBackButtonClick = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>This page does not exist</h1>
      <button type="button" onClick={onGoToHomeButtonClick}>Go to Home</button>
      <button type="button" onClick={goBackButtonClick}>Go to Back</button>
    </div>)
}