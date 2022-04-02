import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 50vh;
	right: 0;
	bottom: 0;
	left: 0;
`

const ErrorButton = styled.button`
	font-size: 1.125rem;
	background: red;
	color: #fff;
	padding: 0.5em;
	margin-top: 1em;
	border: 2px solid #111111;

	&:enabled:hover {
		background: #111111;
		transition: all 0.5s ease-in-out;
		transform: scale(1.1);
	}
`

export const NotFound = () => {
	return (
		<ErrorPage>
			<h2>Sorry this movie does not exist</h2>
			<Link to='/'>
				<ErrorButton>Back to main page</ErrorButton>
			</Link>
		</ErrorPage>
	)
}
