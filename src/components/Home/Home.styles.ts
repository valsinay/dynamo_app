import styled, { keyframes } from "styled-components";
import Modal from "react-responsive-modal";

export const Wrapper = styled.div<{ $loading?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.$loading ? "center" : "start")};
  width: 100%;
  flex: 1;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 1rem solid ${(props) => props.theme.main.lightGray};
  border-top: 1rem solid ${(props) => props.theme.main.lightBlue};
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: ${spin} 2s linear infinite;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 2rem;
  width:-webkit-fill-available;
  padding: 0 2rem;
  margin-top: 2rem;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.main.darkGray};
`;

export const StyledDiv = styled.div<{$margin?: string;$primary?: boolean;$container?: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${(props) => props.$margin};
  flex-direction: ${(props) => (props.$container ? "column" : "row")};
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

export const StyledModal = styled(Modal)`
  .react-responsive-modal-modal.customModal {
    max-width: 100%;
  }
`;
