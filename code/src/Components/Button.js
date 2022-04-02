import styled from "styled-components";

const Button = styled.button`
    appearance: none;
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    width: 100px;
    height: 40px;
    border-radius: 25px;
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (min-width: 668px) {
        font-size: 2rem;
        top: 2.5rem;
        left: 3rem;       
    }
`

export default Button