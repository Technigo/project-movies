import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({StyledButton})=> {
    const navigate = useNavigate();
    const onHomeButtonClick = ()=> {
        navigate('/')
    }
    return (
        <div className='error'>
            <p>Sorry, page not found!</p>
            <StyledButton className='styled-button' onClick={onHomeButtonClick}>Return to Home Page</StyledButton>
        </div>
    )
}
export default NotFound;
