import styled from "styled-components";

export const Button = styled.button`
  background-color: rgba(0, 119, 224, 0.8) ;
  color: rgba(255, 255, 255);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px; /* Full rounded corners */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.bubbleGum}, 0 0 0 4px rgb(255 255 255);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.bubbleGum}, 0 0 0 4px rgb(255 255 255);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
