import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../theme/theme"
import { H1 } from "../shared/SharedStyles.styles"

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  border: 1rem solid ${(props) => props.theme.main.lightGray};
  border-top: 1rem solid ${(props) => props.theme.main.lightBlue};
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: ${spin} 2s linear infinite;
`;

export const Loader = ()=> {
    return (
        <>
          <StyledLoader data-testid="loader" />
          <H1 $color={theme.main.darkGray}>Loading...</H1>
        </>
    )
}