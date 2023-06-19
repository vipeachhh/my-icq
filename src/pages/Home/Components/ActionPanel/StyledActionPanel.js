import styled from "styled-components";

const StyledActionPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #117383;
  width: 90px;
  text-align: center;
  justify-content: space-evenly;
  gap: 3px;
  height: 70px;
  color: white;
  border-radius: 30px;
  border: 2px solid #127323;
`;

const StyledActionButton = styled.div`
  overflow: hidden;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: #117833;
  }
`;

const StyledEditButton = styled(StyledActionButton)``;

const StyledDeleteButton = styled(StyledActionButton)``;

export { StyledActionPanel, StyledEditButton, StyledDeleteButton };
