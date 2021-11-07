import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const ContainerStyled = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MessageStyled = styled.p`
  color: rgb(255, 246, 0);
  font-weight: 700;
  font-size: 20px;
`
const ButtonStyled = styled.button`
  background-image: linear-gradient(86deg, #810034, #26001b);
  text-align: center;
  color: rgb(238, 235, 221);
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  height: 10vh;
  width: 200px;
  cursor: pointer;

  &:hover {
    color: rgb(255, 246, 0);
  }
`

const NotFound = () => {
  const history = useHistory()

  return (
    <ContainerStyled>
      <MessageStyled>Sorry, this page is not found</MessageStyled>
      <ButtonStyled type='button' onClick={() => history.push('/')}>
        Back to homepage
      </ButtonStyled>
    </ContainerStyled>
  )
}

export default NotFound
