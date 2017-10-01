import cable from "actioncable";

function createCableUrl() {
  const { protocol, hostname, port } = window.location;

  const cableProtocol = protocol === "https:" ? "wss:" : "ws:";
  const cableHost = hostname;
  const cablePort = port ? `:${port}` : "";

  const meta = document.querySelector("meta[name=action-cable-url");
  const cablePath = meta.getAttribute("content");

  return `${cableProtocol}//${cableHost}${cablePort}${cablePath}`;
}

function createCableConsumer() {
  const url = createCableUrl();

  return cable.createConsumer(url);
}

let consumer;

function getCableConsumer() {
  if (!consumer) {
    if (process.env.NODE_ENV === "development") {
      cable.startDebugging();
    }

    consumer = createCableConsumer();
  }

  return consumer;
}

function createChannel() {
  const { subscriptions } = getCableConsumer();

  return subscriptions.create(...subscriptions);
}

export default createChannel;
