import styled from "styled-components";
import Modal from "react-responsive-modal";

export const Wrapper = styled.div<{ $loading?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.$loading ? "center" : "start")};
  width: 100%;
  flex: 1;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 2rem;
  width: -webkit-fill-available;
  padding: 0 2rem;
  margin-top: 2rem;
`;

export const StyledDiv = styled.div<{
  $container?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.$container ? "column" : "row")};
`;

export const StyledModal = styled(Modal)`
  .react-responsive-modal-modal.customModal {
    max-width: 100%;
  }
`;
