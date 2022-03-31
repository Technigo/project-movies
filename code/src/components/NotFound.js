
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';




const MovieDetailStyle = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-size: cover;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)),
                      url(https://image.tmdb.org/t/p/original${( ({ background }) => background)})

`


const ErrorNumber = styled.p`
font-size: 20rem;
opacity: 0.5;
text-align: center;
padding: 20%;
margin: 0;
position: absolute;

@media (max-width: 600px) {
    font-size: 5rem;
  }

  @media (min-width: 601px) and (max-width: 1100px) {
    font-size: 10rem;
  }
`

const ErrorText = styled.div`
padding: 5rem;
position: absolute;
padding: 40% 10%;

`





const NotFound = () => {
   
    
    const navigate = useNavigate();

    return (
        
        <MovieDetailStyle >


        <ErrorNumber>404</ErrorNumber>
        <div className='detail-container'>
                <ErrorText>
                    <h3>Page not found</h3>
                    <button type='button' onClick={() => navigate('/')}>Back to main page</button>
                    <p>overview N/A</p>
                </ErrorText>
            </div>

        </MovieDetailStyle>
    )
       
}

export default NotFound