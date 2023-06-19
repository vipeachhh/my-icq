import React from "react";
import { StyledMessage, StyledText } from "./ChatMessage.styled";

function Message({ text = "empty", onClick }) {
  return (
    <StyledMessage onClick={onClick}>
      <StyledText>{text}</StyledText>
    </StyledMessage>
  );
}

export default Message;
