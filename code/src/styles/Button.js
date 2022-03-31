import styled from "styled-components"

const Button = styled.button`

    color: ${ (props) => props.color ? props.color : 'black'} ;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: ${ (props) => props.fontsize };
    font-weight: 700;
    text-decoration:none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    position: absolute;
    left: ${ (props) => props.left };
    top: ${ (props) => props.top };
    transition: all 0.4s ease;

    &:hover {
       left: ${ (props) => props.leftHover ? props.leftHover  : '' };
       gap:  ${ (props) => props.gapHover ? props.gapHover  : '' } ;
    }

`

export default Button;