import styled from "styled-components";

const StyledChatItem = styled.div`
  height: 70px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  background-color: #35c223;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

const StyledChatItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 450;
`;

const StyledChatItemBody = styled.div`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  min-height: 38px;
`;

const StyledChatItemSide = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  flex: 1;
`;

const StyledDateText = styled.div`
  margin-top: 3px;
  font-weight: 400;
  font-size: 12px;
`;

export {
  StyledChatItem,
  StyledChatItemHeader,
  StyledChatItemBody,
  StyledChatItemSide,
  StyledDateText,
};
