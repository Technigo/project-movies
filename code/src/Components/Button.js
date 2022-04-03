import styled from "styled-components";

const Button = styled.button`
    appearance: none;
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 25px;
    border: none;
    background: ${props => props.background};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    padding: 10px;
    display: flex;
    letter-spacing: 0;
    align-items: center;
    justify-items: center;

    &:hover {
        letter-spacing: ${props => props.letterSpacing}; 
        left: ${props => props.leftHover};
        background: ${props => props.backgroundHover};
        color: ${props => props.colorHover};
    }
    

    @media screen and (min-width: 668px) {
        font-size: ${props => props.fontSizeDesktop};
        top: ${props => props.topDesktop};
        left: ${props => props.leftDesktop};  
        width: ${props => props.widthDesktop};
        height: ${props => props.heightDesktop};
    }
`

export default Button