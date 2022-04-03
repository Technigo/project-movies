import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}

h2 {
  max-width: 342px;
}

a {
  text-decoration: none;
  color: white;
}

.movie-img {
  width: 360px;
  display: flex;
}

`

export default GlobalStyles
