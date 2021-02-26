const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const lineToSendRoutes = require("./routes/lines-to-send_routes");

const socketio = require("socket.io");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(lineToSendRoutes);

app.get("/", function (req, res) {
  res.render("home", {});
});

let server = app.listen(3000);
let io = socketio(server);

io.on("connection", function (socket) {
  socket.on("new_line", function (data) {
    io.emit("new_line", data);
  });

  socket.on("disconnect", function () {});
});

const client = require("./realtime/client");
module.exports = app;
