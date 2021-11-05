import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const countries = {
  sweden: 'SE',
  japan: 'JP',
  india: 'IN',
  iran: 'IR',
  thailand: 'TH',
  china: 'CN',
  morocco: 'MA',
  mexico: 'MX',
  egypt: 'EG',
  brazil: 'BR',
  turkey: 'TR',
  croatia: 'HR',
}

const SectionGridStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  width: 60%;
  margin: 5vh auto;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const LinkToCountryStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  height: 10vh;
  text-align: center;
  color: rgb(238, 235, 221);
  border-radius: 10px;

  background-image: linear-gradient(86deg, #810034, #26001b);

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(255, 246, 0);
    font-size: larger;
    position: relative;
    right: 10px;
  }
`
const TitleStyled = styled.h1`
  margin-top: 10vh;
  text-align: center;
  color: rgb(238, 235, 221);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const ToplistStyled = styled.span`
  color: rgb(255, 246, 0);
`
const SubHeadingStyled = styled.h2`
  margin: 4vh 0;
  color: rgb(238, 235, 221);
  font-weight: 400;
  font-size: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`
const ArrowDownStyled = styled.img`
  width: 50px;
  margin-top: 10px;
  filter: invert(0.7);
  cursor: not-allowed;
  animation: bounce 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  border-radius: 50%;
  animation-direction: alternate;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FooterStyled = styled.footer`
  font-size: 14px;
  color: rgb(238, 235, 221);
  text-align: center;
`

const FirstPage = () => {
  return (
    <>
      <HeaderStyled>
        <TitleStyled>
          Find the list of <ToplistStyled>movies</ToplistStyled> you want to see
        </TitleStyled>
        <SubHeadingStyled>
          Select a <ToplistStyled>country</ToplistStyled> of your choice
        </SubHeadingStyled>
        <ArrowDownStyled src='./assets/chevron.png' alt='arrow down' />
      </HeaderStyled>
      <SectionGridStyled>
        <LinkToCountryStyled to={`/list/${countries.sweden}`}>
          Sweden
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.japan}`}>
          Japan
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.india}`}>
          India
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.iran}`}>
          Iran
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.thailand}`}>
          Thailand
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.china}`}>
          China
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.morocco}`}>
          Morocco
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.mexico}`}>
          Mexico
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.egypt}`}>
          Egypt
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.brazil}`}>
          Brazil
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.turkey}`}>
          Turkey
        </LinkToCountryStyled>
        <LinkToCountryStyled to={`/list/${countries.croatia}`}>
          Croatia
        </LinkToCountryStyled>
      </SectionGridStyled>
      <FooterStyled>© by Elin & Katie | Technigo</FooterStyled>
    </>
  )
}

export default FirstPage
