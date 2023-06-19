const sendMessage = (message) => {
  return {
    type: "chat/ADD_MESSAGE",
    payload: message,
  };
};

const deleteMessage = (message) => {
  return {
    type: "chat/DELETE_MESSAGE",
    payload: message,
  };
};

export { sendMessage, deleteMessage };
