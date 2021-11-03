import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 20px 50px 0 50px;
  text-decoration: none;
  color: whitesmoke;
`

const StyledSvg = styled.svg`
  height: 50px;
`

const Styledh2 = styled.h2`
  &:hover {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    transform: translateX(10px);
  }
`

export const BackButton = () => (
  <StyledLink to='/'>
    <StyledSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
      <path
        d='M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z'
        fill='#fff'
        fillRule='evenodd'
      />
    </StyledSvg>
    <Styledh2>Movies</Styledh2>
  </StyledLink>
)
