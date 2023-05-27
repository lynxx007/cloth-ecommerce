import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;
