import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #111111;
	color: #fff;
`

export const Navbar = () => {
	return (
		<NavbarDiv>
			<div className='navbar'>
				<h1>SITE NAME</h1>
				<div className='navlinks'>
					<NavLink to='/'>Popular</NavLink>
					<NavLink to='/toprated'>Top Rated</NavLink>
					<NavLink to='/upcoming'>Recent</NavLink>
				</div>
			</div>
		</NavbarDiv>
	)
}
