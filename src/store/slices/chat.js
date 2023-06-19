import { createSlice } from "@reduxjs/toolkit";
import { createMessage } from "../../services/firebase/actions/messages/createMessage";
import { deleteMessage } from "../../services/firebase/actions/messages/deleteMessage";
import { current } from "@reduxjs/toolkit";

export const chat = createSlice({
  name: "chat",

  initialState: {
    user: "Vika",
    displayedMessages: [],
    pendingMessages: [],
    dbMessages: [],
  },

  reducers: {
    ADD_MESSAGE: (state, action) => {
      state.pendingMessages.push(action.payload);
      createMessage(action.payload, state.dbMessages.length, state.user);
      state.displayedMessages = state.dbMessages.concat(state.pendingMessages);
    },
    ONADDED_MESSAGE: (state, action) => {
      state.pendingMessages.shift();
      console.log(action.payload);
      state.dbMessages = action.payload;
      state.displayedMessages = state.dbMessages.concat(state.pendingMessages);
    },
    DELETE_MESSAGE: (state, action) => {
      const index = state.dbMessages
        .map((e) => e.id)
        .indexOf(action.payload.id);
      if (index > -1) {
        state.dbMessages.slice(index, 1);
        deleteMessage(index, state.user);
      }
    },
  },
});

export const { ADD_MESSAGE, DELETE_MESSAGE } = chat.actions;

export default chat.reducer;

// UI Component -> Redux Store (LocalStorage) -> Firebase
