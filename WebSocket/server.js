const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const session = require("express-session");

const lineToSendRoutes = require("./routes/lines-to-send_routes");
const tasksRoutes = require("./routes/tasks_routes");
const registrationsRoutes = require("./routes/registrations_routes");
const sessionsRoutes = require("./routes/sessions_routes");
const categoriesRoutes = require("./routes/categories_routes");

const findUserMiddleware = require("./middlewares/find_user");
const authUser = require("./middlewares/auth_user");

const socketio = require("socket.io");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "pug");

app.use(
  session({
    secret: ["12iasdhasjdasdhbasjd", "123yhuasdgasdjkznxcjxzkh1y23"],
    saveUninitialized: false,
    resave: false,
  })
);

app.use(findUserMiddleware);
app.use(authUser);
app.use(lineToSendRoutes);
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(categoriesRoutes);

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
