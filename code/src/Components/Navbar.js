import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const NavbarDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Navbar = () =>{

    return(
        <NavbarDiv>
            <h1>SITE NAME</h1>
            <div>
                <NavLink to="/">Popular</NavLink>
                <NavLink to="/toprated">Top Rated</NavLink>
            </div>
        </NavbarDiv>
    )
}