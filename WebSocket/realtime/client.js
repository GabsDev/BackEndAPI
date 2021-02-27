const io = require("socket.io-client");

let host = "http://localhost:3000/";

if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  host = "http://localhost:3000/";
}

let socket = io.connect(host, { reconnect: true });

socket.on("connect", function () {
  console.log("\n\nSocket connected from NodeJS\n\n");
});

module.exports = socket;
