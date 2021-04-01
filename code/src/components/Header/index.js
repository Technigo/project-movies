import React from 'react';
import styled from 'styled-components';

import RouteHeaderLink from 'components/Styled/RouteHeaderLink'

const HeaderSection = styled.header`
  background: var(--dark1);
  display: flex;
  justify-content: center;  
`;

const Header = () => {
  return (
    <HeaderSection>
      <RouteHeaderLink to="/">Filmoona</RouteHeaderLink>
    </HeaderSection>
  )
}

export default Header;