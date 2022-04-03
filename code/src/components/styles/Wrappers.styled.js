import styled from 'styled-components'

export const DetailsWrapper = styled.div`
position: relative;

& > img {
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.6);
  margin: 40px 0 0 40px;
}
@media (min-width: 375px) {
  & > img {
    width: 40%;
  }
}
  
  @media (min-width: 1024px) {
    & > img{
      width: 30%;
    }
  }
`

export const DetailsTextWrapper = styled.div`
position: relative;
padding: 50px;
background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));

& img {
  width: 15px;
  margin-right: 5px;
}

& > h2, & > p, & > span {
  color: white;
}

`