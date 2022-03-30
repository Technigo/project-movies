import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiChevronLeft } from "react-icons/fi";
import { FaSadCry } from "react-icons/fa";

const NotFoundSection = styled.div`
    min-height: 100vh;
    display: flex;
    background-color: #000;
    text-align: center;
`;

const NotFoundMessage = styled.h1`
    display: flex;
    align-items: center;
    margin: auto;
    color: #fff;
    text-decoration: underline;
    svg{
        margin-left: 1rem;
    }
`;

const Button = styled.button`
  position: absolute;
  display: inline-flex;
  color: #fff;
  background: #000;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 20px;
  left: 50px;
  top: 50px;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;
  text-align: center;
  svg {
    position: relative;
    top: 50%;
    left: 0%;
    transform: translate(-50%, 25%);
  }
`;

const NotFound = () => {
  return (
    <NotFoundSection>
        <Link to="/">
            <Button >
                <FiChevronLeft />
                <span>Back to Movies</span>
            </Button>
        </Link>
        <NotFoundMessage>
            Ooops, nothing to see here 
            <FaSadCry />
        </NotFoundMessage>
    </NotFoundSection>
  )
}

export default NotFound