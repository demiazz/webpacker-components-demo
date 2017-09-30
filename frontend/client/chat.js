import createChannel from "client/cable";

let listeners = [];

const chat = createChannel("ChatChannel", {
  received({ message }) {
    for (let i = 0; i < listeners.length; i += 1) {
      listeners[i].call(null, message);
    }
  }
});

function sendMessage(message) {
  chat.perform("send_message", { message });
}

function subscribe(listener) {
  listeners.push(listener);
}

export { sendMessage, subscribe };
