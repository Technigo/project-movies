import styled from 'styled-components'

export const DetailsWrapper = styled.div`
position: relative;
padding: 50px;

& > img {
    box-shadow: 0px 4px 3px rgba(0,0,0,0.1),
               0px 8px 13px rgba(0,0,0,0.1),
               0px 18px 23px rgba(0,0,0,0.1)
}

 @media (min-width: 375px) {
  & > img {
    width: 40%;
  }
}

@media (min-width: 667px) {
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

& img {
  width: 15px;
  margin-right: 5px;
}

& > h2, & > p, & > span {
  color: white;
}

`