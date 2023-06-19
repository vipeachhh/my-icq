import React from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../../store/actions/chat";
import {
  StyledActionPanel,
  StyledDeleteButton,
  StyledEditButton,
} from "./StyledActionPanel";

function ActionPanel({ position, selectedMessage }) {
  const dispatch = useDispatch();
  function onDeleteClick() {
    dispatch(deleteMessage(selectedMessage));
  }

  function onEditClick() {}

  return (
    <StyledActionPanel style={{ position: "absolute", ...position }}>
      <StyledEditButton onClick={onEditClick}>Edit</StyledEditButton>
      <StyledDeleteButton onClick={onDeleteClick}>Delete</StyledDeleteButton>
    </StyledActionPanel>
  );
}

export default ActionPanel;
