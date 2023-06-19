import React from "react";
import Chat from "./Chat";
import { useSelector } from "react-redux";

function ChatContainer() {
  const messages = useSelector((state) => state.chat.displayedMessages);
  return <Chat messages={messages} />;
}

export default ChatContainer;
