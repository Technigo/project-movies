import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const countries = {
  sweden: "SE",
  japan: "JP",
  india: "IN",
  iran: "IR",
  thailand: "TH",
  china: "CN",
  morocco: "MA",
  mexico: "MX",
  egypt: "EG",
  brazil: "BR",
  turkey: "TR",
  croatia: "HR",
}

const SectionGridStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  width: 60%;
  margin: 10vh auto;
  grid-gap: 10px;
  border: 1px solid rgb(255, 0, 92);
  padding: 50px;
  box-shadow: 3px 3px 3px;
`
const LinkToCountryStyled = styled(Link)`
  display: flex;
  flex-direction: coloumn;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  height: 10vh;
  text-align: center;
  color: rgb(238, 235, 221);
  border-radius: 10px;

  background-image: linear-gradient(86deg, #810034, #26001b);

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(255, 246, 0);
    font-size: larger;
  }
`

const TitleStyled = styled.h1`
  text-align: center;
  margin-top: 10vh;
  color: rgb(238, 235, 221);
`
const ToplistStyled = styled.span`
  color: rgb(255, 246, 0);
`
const FirstPage = () => {
  return (
    <>
      <TitleStyled>
        Choose which country <ToplistStyled>toplist</ToplistStyled> you want to
        see
      </TitleStyled>
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
    </>
  )
}

export default FirstPage

// <form onSubmit={onHandleSubmit}>
//   <label htmlFor='country'>
//     Choose country here
//     <select onChange={onCountryChange} required id='country'>
//       <option value=''>Choose country here</option>
//       <option value='SE'>Sweden</option>
//       <option value='JP'>Japan</option>
//     </select>
//   </label>
//   {console.log('inside FirstPage cl', country)}
//   <button type='submit'>Submit</button>
// </form>

{
  /* <div>
        <button type='button' onClick={onCountryChange} value='SE'>
          Sweden
        </button>
        <button type='button' onClick={onCountryChange} value='JP'>
          Japan
        </button>
      </div> */
}
