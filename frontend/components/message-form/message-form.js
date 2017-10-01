import { sendMessage } from "client/chat";

import component from "utils/component";

import "components/button/button";
import "components/input/input";
import "./message-form.css";

component(".js-message-form", element => {
  const input = element.querySelector(".js-message-form--input");
  const submit = element.querySelector(".js-message-form--submit");

  function queueMessage() {
    sendMessage(input.value);

    input.value = "";
    input.focus();
  }

  input.addEventListener("keydown", event => {
    if (event.keyCode === 13 && event.metaKey) {
      event.preventDefault();

      queueMessage();
    }
  });

  submit.addEventListener("click", event => {
    event.preventDefault();

    queueMessage();
  });
});
