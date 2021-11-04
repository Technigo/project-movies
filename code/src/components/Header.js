import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header `
  height: 30px;
  background-color: #181e1e;
`

export const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        Popular Movies
      </NavLink>
{/*       <NavLink to="/movies">
        Summary
      </NavLink> */}
    </StyledHeader>
  )
}
