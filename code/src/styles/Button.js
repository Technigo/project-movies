import styled from "styled-components"

const Button = styled.button`

    color: ${ (props) => props.color ? props.color : 'black'} ;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    text-decoration:none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    position: absolute;
    left: 50px;
    top: 50px;
    transition: all 0.4s ease;

    &:hover {
       left: 30px;
       gap: 10px;
    }

`

export default Button;