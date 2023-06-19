import React from "react";
import Image from "../../../../common/components/Image";
import {
  StyledChatItemHeader,
  StyledChatItemBody,
  StyledChatItem,
  StyledChatItemSide,
  StyledDateText,
} from "./ChatItem.styled";
import { favoritesIcon } from "../../../../assets";
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";

function ChatItemHeader({ userName, lastMessageDate }) {
  return (
    <StyledChatItemHeader>
      <Trans>{userName}</Trans>
      <StyledDateText>{lastMessageDate}</StyledDateText>
    </StyledChatItemHeader>
  );
}

function ChatItemBody({ lastMessageText }) {
  return <StyledChatItemBody>{lastMessageText}</StyledChatItemBody>;
}

function ChatItem({ userAvatar = favoritesIcon }) {
  let userName = "xd";
  if (userAvatar === favoritesIcon) {
    userName = "Favorites";
  }
  const messages = useSelector((state) => state.chat.displayedMessages);
  let lastMessageText = "";
  if (messages.length > 0) {
    lastMessageText = messages[messages.length - 1].text;
  }
  let lastMessageDate = "22.02.23";
  return (
    <StyledChatItem>
      <Image url={userAvatar} size={"50px"} static={true} />
      <StyledChatItemSide>
        <ChatItemHeader userName={userName} lastMessageDate={lastMessageDate} />
        <ChatItemBody lastMessageText={lastMessageText} />
      </StyledChatItemSide>
    </StyledChatItem>
  );
}

export default ChatItem;
