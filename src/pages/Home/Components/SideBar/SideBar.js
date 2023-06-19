import React from "react";
import Input from "../../../../common/components/Input";
import Image from "../../../../common/components/Image";
import {
  StyledHeader,
  StyledBody,
  StyledFooter,
  StyledSideBar,
  StyledSearchImage,
  StyledSearch,
} from "./SideBar.styled";
import { Trans } from "react-i18next";

import { contactsIcon, searchIcon } from "../../../../assets";
import { settingsIcon } from "../../../../assets";
import { messagesIcon } from "../../../../assets";
import { chatsIcon } from "../../../../assets";
import ChatList from "../ChatList/ChatList";

function SideBarHeader() {
  return (
    <StyledHeader>
      <Image url={settingsIcon} size={"20px"}></Image>
      <Trans>Chats</Trans>
      <Image url={messagesIcon} size={"20px"}></Image>
    </StyledHeader>
  );
}

function SideBarBody() {
  return (
    <StyledBody>
      <StyledSearch>
        <Input placeholder={"Поиск"} leftIndent={"45px"}></Input>
      </StyledSearch>
      <StyledSearchImage url={searchIcon} size={"20px"}></StyledSearchImage>
      <ChatList></ChatList>
    </StyledBody>
  );
}

function SideBarFooter() {
  return (
    <StyledFooter>
      <Image url={contactsIcon} size={"35px"}></Image>
      <Image url={chatsIcon} size={"35px"}></Image>
      <Image url={settingsIcon} size={"35px"}></Image>
    </StyledFooter>
  );
}

export function SideBar() {
  return (
    <StyledSideBar>
      <SideBarHeader></SideBarHeader>
      <SideBarBody></SideBarBody>
      <SideBarFooter></SideBarFooter>
    </StyledSideBar>
  );
}
