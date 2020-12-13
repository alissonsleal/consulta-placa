import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --accent: #970B05;
    --background: #131516;
    --light-background: #26292a;
    --text: #dfdcd8;
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
