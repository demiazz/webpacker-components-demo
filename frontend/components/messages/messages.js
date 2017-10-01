import { subscribe } from "client/chat";

import component from "utils/component";

import "components/message/message";

import "./messages.css";

component(".js-messages", element => {
  const content = element.querySelector(".js-messages--content");

  function scrollToBottom() {
    content.scrollTop = content.scrollHeight;
  }

  scrollToBottom();

  subscribe(message => {
    content.insertAdjacentHTML("beforeend", message);

    scrollToBottom();
  });
});
