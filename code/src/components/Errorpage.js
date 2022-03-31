import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Errorpage = () => {

    const StyledErrorBackLink = styled(Link)`
        background-color: white;
        width: 200px;
        margin: 50px;
        color: black;
        text-decoration: none;
        border-radius: 10px;
        text-align: center;
        padding: 10px;

        &:hover {
            filter: brightness(80%);
        }
    `

    return (
        <div style={{height: '100vh'}}>
            <nav style={{margin: '20px'}}>
                <StyledErrorBackLink to="/">Back to movielist page</StyledErrorBackLink>
            </nav>
            <h1 style={{color: 'white'}}>Error - page does not exist</h1>
        </div>
    )
}

export default Errorpage;