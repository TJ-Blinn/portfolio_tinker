import styled from "styled-components";
import React from "react";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-dark-grey);
  padding: 0.5rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }

  &:hover {
    background-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;

// add flex-wrap to ButtonsStyled to accomodate for additional future buttons
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.5rem auto;
`;

export default Button;
