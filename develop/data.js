const http = require("http");
const PORT = 3000;
const path = require("path");
const express = require("express");
const app = express();
const server = http.createServer(handleRequest);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
// Dependencies


// Data
const reservations = [{
  name:
    number:
  email:
    uniqueID:
}];

const waitList = [{
  name:
    number:
  email:
    uniqueID:
}];

function handleRequest(req, res) {
  let requestData = "";

  req.on("data", function (data) {
    requestData += data;
  });

  req.on("display", function () {

    app.get("/", function (req, res) {
      // add html file homepage
      res.sendFile(path.join(__dirname, "view", "home-page.html"));
    });

    app.get("/viewTables", function (req, res) {
      // add html file
      res.sendFile(path.join(__dirname, "view", "tables.html"));
    });

    app.get("/reservations", function (req, res) {
      // add html file
      res.sendFile(path.join(__dirname, "view", "reservation.html"));
    });
  })
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  }