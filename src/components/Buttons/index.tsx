import { shade } from "polished";
import styled, { css } from "styled-components";

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  height: 3rem;
  width: 11rem;
  /* background: #8048cf; */
  color: white;
  border: 2px solid white;
  border-radius: 50px;

    background: #8048cf;
    transition: color 0.2;

    &:hover {
      background: ${shade(0.3, "#8048cf")};
    }

  /* The GitHub button is a secundary button
   * edit this to target it specifically! */
  ${(props) =>
    // props.secondary &&
    css`
      /* background: transparent;
      color: #8048cf; */
    `}
`;
