import styled from 'styled-components'

export const BackButton = styled.div`
cursor: pointer;
margin: 20px;
transition: transform .2s;
top: 0;
left: 0;
position: absolute;

& > i {
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

&:hover{
    transform: scale(1.2);
}

i:hover{
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

`
