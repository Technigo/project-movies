import React from 'react'
import { ReactComponent as Logo } from "../assets/movie_logo.svg";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapperStyled = styled.div `
    background-color: black;
    width: 100vw; 
    position: fixed;
    display: flex;
    z-index: 3;
`

const HeaderStyled = styled.header`
    color: white;
    height: 140px;
    width: 100%;

    @media (min-width: 768px) {
        height: 80px;
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
    }
`

const LogoStyled = styled.div`
    height: 80px;
    width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: flex-start;
        margin-left: 20px;
    }    

    @media (min-width: 1220px) {
        margin-left: 0;
    }

`


const Header = () => {

    return (
        <HeaderWrapperStyled>
        <HeaderStyled>
            <NavLink exact to="/">
                <LogoStyled>
                    <Logo />
                </LogoStyled>
            </NavLink>
        </HeaderStyled>
        </HeaderWrapperStyled>
    )
}
export default Header 
