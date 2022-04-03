import React from 'react'
import styled from 'styled-components'

const MyFooter = styled.footer`
	background: #010101;
	color: #fff;
	text-align: center;
	position: fixed;
	bottom:0;
	padding: 0.5em;
	width: 100vw;
`

export const Footer = () => {
	return <MyFooter>Made by Kristiina & Emma</MyFooter>
}
