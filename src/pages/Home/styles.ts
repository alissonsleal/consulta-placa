import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: 400;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    input {
      background: var(--light-background);
      height: 3rem;
      width: 15rem;
      padding: 0;
      color: var(--text);
      text-align: center;
      font-size: 1.4rem;
      border-radius: 0.5rem 0.5rem 0 0;
      text-transform: uppercase;

      ::placeholder {
        text-transform: none;
      }
    }

    button[type='submit'] {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent);
      height: 3rem;
      width: 15rem;
      border: 2px solid var(--accent);
      color: var(--text);
      border-radius: 0 0 0.5rem 0.5rem;
      font-size: 1.2rem;

      & svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
