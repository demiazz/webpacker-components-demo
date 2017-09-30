import createChannel from "client/cable";

const chat = createChannel("ChatChannel");

function sendMessage(message) {
  chat.perform("send_message", { message });
}

export default sendMessage;
