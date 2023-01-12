import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    background-color: #1F1F1F;
    color: #D4D4D4;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .5s;
  }
  a:hover {
    color: red;
  }
`