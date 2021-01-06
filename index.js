require("dotenv").config({ path: __dirname + "/.env" });
var cors = require("cors");

const app = require("express")();

app.use(cors());
http = require("http").createServer(app);

// An api endpoint that returns a list of available tables
app.get("/tables", (req, res) => {
  const list = [
    {
      id: 1,
      title: "Garretts Table",
    },

    {
      id: 2,
      title: "Valid JSON",
    },
    {
      id: 3,
      title: "mikayla server table",
    },
  ];
  res.json(list);
  console.log("Sent list of tables");
});

http.listen(process.env.API_PORT, () => {
  console.log("Listening on PORT", process.env.API_PORT);
});
