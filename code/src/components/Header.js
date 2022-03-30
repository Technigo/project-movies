import React from 'react';
import styled from 'styled-components';

export const Header = ({title}) => {
    return (
        <header>
            <StyledHeader>{title}</StyledHeader>
        </header>
    )
}

const StyledHeader = styled.header`
    color: grey;
    font-weight: 300;
    font-size: 6rem;
`;
