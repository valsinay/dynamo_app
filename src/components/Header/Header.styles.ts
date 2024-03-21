import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.main.black};
`;

export const StyledDiv = styled.div<{$margin?: string;$switch?: boolean;$container?: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${(props) => props.$margin};
  ${(props) =>
    props.$switch &&
    `
  border-radius: 0.375rem;
  border: 1px solid ${props.theme.main.black};
  overflow: hidden;
`}
  ${(props) =>
    props.$container &&
    `
  background: ${props.theme.background};
  box-sizing: border-box;
  width: 100%;
  padding: 0 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`}
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
