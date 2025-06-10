import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: "Poppins", sans-serif;
    color: #1a1a1a;
  }

  p {
    line-height: 1.5
  }

  a {
    color: #1a1a1a;
  }

  ul {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h2 {
    font-family: "Roboto Slab", serif;
  }
`;
