import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --accent: #F9564F;
    --background: #181a1b;
    --light-background: #323232;
    --text: #f1f1f1;
  }

  * {
    box-sizing: border-box;
  }
  body {
  padding: 0rem;
  margin: 0rem;
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  font-weight: 400;
  background-color: var(--background);
  }
  a {
    text-decoration: none;
    color: var(purple);
  }
  input, button {
    border: 0rem;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
