const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const gameValueRoutes = require("./routes/game-value_routes");
const lineToSendRoutes = require("./routes/lines-to-send_routes");

socketio = require("socket.io");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(lineToSendRoutes);
app.use(gameValueRoutes);

let server = app.listen(process.env.PORT || 3000);
let io = socketio(server);

io.on("connection", function (socket) {
  socket.on("new_line", function (data) {
    io.emit("new_line", data);
  });
  socket.on("update_line", function (data) {
    io.emit("update_line", data);
  });

  socket.on("new_game_value", function (data) {
    io.emit("new_game_value", data);
  });
  socket.on("update_game_value", function (data) {
    io.emit("update_game_value", data);
  });

  socket.on("disconnect", function () {});
});
