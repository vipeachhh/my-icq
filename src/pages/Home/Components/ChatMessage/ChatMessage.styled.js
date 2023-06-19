import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
  margin-bottom: 20px;
  border-radius: 15px;
  width: fit-content;
  min-width: 50px;
  max-width: 300px;
  background-color: green;
`;

const StyledText = styled.div`
  color: white;
  padding: 10px;
  word-wrap: break-word;
  overflow: hidden;
`;

export { StyledMessage, StyledText };
