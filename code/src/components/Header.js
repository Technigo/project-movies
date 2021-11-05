import React from 'react'
import { ReactComponent as Logo } from "../assets/movie_logo.svg";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    position: fixed;
    background-color: black;
    color: white;
    height: 80px;
    width: 100vw;
    z-index: 3;
`

const LogoStyled = styled.div`
    position: absolute;
    left: 60px;
    height: 80px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
// const NavStyled = styled.nav `
//     position: absolute;
//     right: 60px; 
//     top: 20px;
//     border: white 1px solid;
//     padding 8px 10px;
//     border-radius: 12px;
//     display: ${props => (props.hidden ? 'none' : 'block')}
//     &:hover {
//         background-color: red;
//     }
// `

// const SelectStyled = styled.select`
//     color: white;
//     background-color: transparent;
//     font-size: 18px;
//     border: none;
// `

const Header = () => {

    // const onSelectChange = (event) => {
    //     setSelect(event.target.value)
    // } 

    return (
        <HeaderStyled>
            <NavLink exact to="/">
                <LogoStyled>
                    <Logo />
                </LogoStyled>
            </NavLink>
            {/* <NavStyled>
                <SelectStyled value={select} onChange={onSelectChange}>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top rated</option>
                    <option value="now_playing">Now playing</option>
                    <option value="upcoming">Upcoming</option>
                </SelectStyled>
            </NavStyled> */}
        </HeaderStyled>
    )
}
export default Header 
