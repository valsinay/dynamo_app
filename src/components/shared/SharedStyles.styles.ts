import styled from "styled-components";

export const H1 = styled.h1<{$color: string}>`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.$color};
`;

export const StyledH2 = styled.h2<{ $margin?: string }>`
  font-size: 2rem;
  color: ${(props) => props.theme.main.black};
  margin: ${(props) => props.$margin || "0"};
`;

export const StyledButton = styled.button<{ $loading?: boolean }>`
  background-color: ${(props) =>
    props.disabled ? props.theme.main.lightGray : props.theme.main.lightBlue};
  color: ${(props) => props.theme.main.white};
  border: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition-duration: 0.4s;
  
  &:hover:enabled {
    background-color: ${(props) => props.theme.hover.lightBlue};
  }
`;
