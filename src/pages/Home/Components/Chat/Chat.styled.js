import styled from "styled-components";

const StyledChatHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 50px;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  justify-content: space-between;
  background-color: white;
`;

const StyledChatHeaderLeftSide = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 15px;
  align-items: center;
`;

const StyledChatHeaderRightSide = styled.div`
  display: flex;
  margin-right: 30px;
`;

const StyledChat = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const StyledChatBottomPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 7px;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledDialogWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: scroll;
  margin-top: auto;

  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMessageInput = styled.div`
  display: flex;
  flex: 1;
`;

export {
  StyledChatHeader,
  StyledChatHeaderLeftSide,
  StyledChatHeaderRightSide,
  StyledChat,
  StyledChatBottomPanel,
  StyledDialogWindow,
  StyledMessageInput,
};
