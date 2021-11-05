import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components/macro";
import Logo from '../logo.png'

const StyledHeader = styled.header `
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #181e1e;
`
const Button = styled.button `
  margin-left: 5px;
  padding: 2px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`
const Popcorn = styled.img `
  height: 50px;
  margin-left: 5px;

`



export const Header = () => {
  return (
    <StyledHeader>
      <Popcorn src={Logo}/>
      <NavLink to="/">
        <Button>Popular Movies</Button>
      </NavLink>
      <NavLink to="/upcoming">
        <Button>Upcoming Movies</Button>
      </NavLink>
    </StyledHeader>
  )
}
