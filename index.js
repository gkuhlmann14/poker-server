require("dotenv").config({ path: __dirname + "/.env" });

const app = require("express")(),
  session = require("express-session"),
  http = require("http").createServer(app);

// io = require('socket.io')(http);
//   MongoStore = require('connect-mongo')(session);

// app.use(
//   session({
//     store: new MongoStore({
//       url: process.env.DATABASE_URL,
//     }),
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7 * 1, // 1 week
//     },
//   }),
// );

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });
// });

// An api endpoint that returns a list of available tables
app.get("/tables", (req, res) => {
  const list = [
    "Garretts Room",
    "High Rollers",
    "Test Table",
    "SERVER TABLE PORT",
  ];
  res.json(list);
  console.log("Sent list of tables");
});

http.listen(process.env.API_PORT, () => {
  console.log("Listening on PORT", process.env.API_PORT);
});
