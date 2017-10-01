import { subscribe } from "client/chat";

import component from "utils/component";

import "components/message/message";

import "./messages.css";

component(".js-messages", element => {
  subscribe(message => {
    element.insertAdjacentHTML("beforeend", message);
  });
});
