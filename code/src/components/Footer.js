import React from "react"
import styled from "styled-components/macro";

const StyledFooter = styled.p `
  height: 30px;
  background-color: cadetblue;
  text-align: center;
  font-size: 18px;
  margin-top: auto;
  padding-top: 2px;
  font-weight: 600;
`

const Footer = () => <StyledFooter>© BumBumBurka & JenQuach</StyledFooter>

export default Footer