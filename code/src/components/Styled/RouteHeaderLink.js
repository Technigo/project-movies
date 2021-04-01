import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RouteHeaderLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  color: var(--secondary);
  text-shadow: 2px 2px var(--dark2);
  transition: all 0.3s ease-in-out;
  padding: 1em 0;
  font-weight: normal;
  font-size: 32px;

  &:hover {
    color: var(--primary);
    transform: scale(1.1);
  }
`;
export default RouteHeaderLink;
