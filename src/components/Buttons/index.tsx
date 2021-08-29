import styled, { css } from "styled-components";

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #8048cf;
  color: white;
  border: 2px solid white;
  border-radius: 50px;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    // props.secondary &&
    css`
      /* background: transparent;
      color: #8048cf; */
    `}
`;
