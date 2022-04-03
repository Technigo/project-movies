import styled from 'styled-components'

export const OverlayCard = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
right: 0;
bottom: 0;
left: 0;
opacity: 0;
background-color: rgba(0, 0, 0, 0.6);

&:hover {
  opacity: 1;
  pointer: cursur;
}

`

export const TextOverlay = styled.div`
display: flex;
position: relative;
flex-direction: column;
padding: 20px;
margin-top: 300px;

`