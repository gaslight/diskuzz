import { Socket, Channel } from "phoenix";

const LiveState = {
  connect(url, channelName, {properties, events}) {
    const socket = new Socket(url, { logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }) });
    socket.connect();
    const channel = this.socket.channel(channelName, {});
  }
}
