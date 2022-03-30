import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    return (

        <div>
        <StyledFooter>
            <p>Made by Emma and Fay <span role="img" aria-label="popcorn emoji">🍿</span></p>
            <p>Technigo Bootcamp 2022</p>
            <p>Project 12 – Movies</p>
            </StyledFooter>
        </div>

    )

}

export default Footer


//styled component for footer
const StyledFooter = styled.div`
text-align: center;
color: gray;
`