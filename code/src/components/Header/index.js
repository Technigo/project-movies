import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.header`
  background: var(--dark1);
  color: var(--secondary);
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px var(--dark2);
`;

const Header = () => {
  return (
    <HeaderSection>
      <h1>Filmoona</h1>
    </HeaderSection>
  )
}

export default Header;