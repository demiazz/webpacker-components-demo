import sendMessage from "client/chat";

import component from "utils/component";

import "./message-form.css";

component(".message-form", element => {
  const input = element.querySelector(".message-form--input");
  const submit = element.querySelector(".message-form--submit");

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
