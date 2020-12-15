import styled, { keyframes } from 'styled-components';

const spin = keyframes`
{ 100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
      }
}`;

export const Container = styled.div`
  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
