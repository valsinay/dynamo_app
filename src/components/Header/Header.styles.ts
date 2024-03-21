import styled from "styled-components";

export const StyledDiv = styled.div<{
  $margin?: string;
  $switch?: boolean;
  $container?: boolean;
}>`
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
