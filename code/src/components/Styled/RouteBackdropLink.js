import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RouteBackdropLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  padding: 1em;
  display: flex;
  align-items: center;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;

  ::before {
    content: '';
    opacity: 0.5;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--dark2);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 0.8;
  }

  & > h1 {
    z-index: 1;
  }

  & > .icon--show-on-hover {
    opacity: 0;
    z-index: 1;
    margin-left: 0;
    font-size: 24px;
    transition: all 0.3s ease-in-out;
  }
  
  &:hover > .icon--show-on-hover {
    margin-left: .5em;
    opacity: 1;
  }
`;
export default RouteBackdropLink;
