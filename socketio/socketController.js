// import { hosts } from "../env";
const io = require("socket.io")(http);

export default (app) => {
  io.on("connection", (socket) => {
    console.log("a user connected");
  });

  return io;
};
