import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const SiteContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: lightgrey;

  @media (min-width: 667px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`
const RedirectButton = styled.button `
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  min-width: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: lightgrey;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const NotFound = () => {
  const history = useHistory()

  const onHomepageRedirect = () => {
    history.push('/')
  }

  const onPreviousPageRedirect = () => {
    history.goBack()
  }

  return(
    <SiteContainer>
      <h2>Sorry, this page doesn't exist</h2>
      <RedirectButton onClick={onHomepageRedirect}>Back to homepage</RedirectButton>
      <RedirectButton onClick={onPreviousPageRedirect}>Back to previous page</RedirectButton>
    </SiteContainer>
  )
}

export default NotFound