import styled from "styled-components";

export const StyledH2 = styled.h2<{ $margin?: string }>`
  font-size: 2rem;
  color: ${(props) => props.theme.main.black};
  margin: ${(props) => props.$margin || "0"};
`;

export const StyledP = styled.p<{ $degrees?: boolean }>`
  font-weight: 700;
  font-size: 1rem;
  margin: 1rem 0 0;
  ${(props) =>
    props.$degrees &&
    `
      font-size: 1.5rem;  
      color:  ${props.theme.main.golden};
    `}
`;

export const ButtonWrapper = styled.button<{ $dayCard?: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.main.lightGray};
  border-radius: 0.6rem;
  padding: 1.25rem;
  margin: 0.6rem;
  text-align: center;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  background-color: ${(props) => props.theme.main.white};
  cursor: pointer;

  svg {
    height: 5rem;
    width: 5rem;
  }

  ${(props) =>
    props.$dayCard &&
    `  
  &:hover {
    opacity: 1.3;
    color: ${props.theme.main.white};
    background: ${props.theme.main.black};
    transition-duration: 0.3s;

    > h2,
    p {
      color: ${props.theme.main.white};
    }
  }
  `}
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.main.lightGray};
  border-radius: 0.6rem;
  padding: 1.25rem;
  margin: 0.6rem;
  text-align: center;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  background-color: ${(props) => props.theme.main.white};

  svg {
    height: 5rem;
    width: 5rem;
  }
`;
