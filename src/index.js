import express from "express";
import * as ioserver from "socket.io";
import http from "http";
import cors from "cors";
import { API_PORT, hosts } from "./env.js";
// import socketController from "../socketio/socketController.js";

const app = express();
app.use(cors({ origin: hosts, credentials: true }));
app.use(express.json());
const server = new http.Server(app);
const io = new ioserver.Server(server);
// socketController(server);

// const io = require("socket.io")(http);

// An api endpoint that returns a list of available tables
app.get("/tables", (req, res) => {
  const list = [
    {
      id: 1,
      title: "Garretts Table",
      slug: "garretts-table",
    },

    {
      id: 2,
      title: "High Rollers",
      slug: "high-rollers",
    },
    {
      id: 3,
      title: "Kuhlmagio",
      slug: "kuhlmagio",
    },
  ];
  res.json(list);
  console.log("Sent list of tables");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.listen(API_PORT, () => {
  console.log("Listening on PORT", API_PORT);
});
