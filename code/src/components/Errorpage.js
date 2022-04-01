import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Errorpage = () => {

    const StyledErrorBackLink = styled(Link)`
        position: absolute; 
        background-color: white;               
        margin: 30px 0 0 30px;   
        padding: 15px;   
        color: black;
        font-weight: 700;  
        text-decoration: none;
        border-radius: 10px;
        display: flex;        

        &:hover {      
            transition: 0.5s ease;      
            filter: invert(70%);
        }
    `

    const Div = styled.div`
        height: 100vh;
    `


    const ErrorText = styled.h2`
        color: white;
        margin: 100px 0 0 30px;
    `
    
    return (
        <Div>
            <nav>
                <StyledErrorBackLink to="/">Back to movielist page</StyledErrorBackLink>
            </nav>
            <ErrorText>Error - page does not exist</ErrorText>
        </Div>
    )
}

export default Errorpage;