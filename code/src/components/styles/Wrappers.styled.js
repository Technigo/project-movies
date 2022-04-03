import styled from 'styled-components'

export const DetailsWrapper = styled.div`
position: relative;

& > img {
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.6);
  margin: 60px 0 0 60px;
}

@media (min-width: 360px) {
  & > img {
    width: 40%;
  }
}
  
  @media (min-width: 1024px) {
    & > img{
      width: 20%;
    }
  }
`

export const DetailsTextWrapper = styled.div`
position: relative;
padding: 20px 0 50px 50px;
background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));

& img {
  width: 15px;
  margin-right: 5px;
}

& > h2, & > p, & > span {
  color: white;
}

`