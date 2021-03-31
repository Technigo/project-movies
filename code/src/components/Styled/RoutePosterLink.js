import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RoutePosterLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  margin: ${(props) => (props.wrapped ? '0' : '1em')};

  ::before {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dark2);
    transition: all 0.3s ease-in-out;
  }
  
  &:hover::before {
    opacity: 0.7;
  }
`;
export default RoutePosterLink