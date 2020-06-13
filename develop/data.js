const http = require("http");
const PORT = 3000;
const path = require("path");

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let requestData = "";

    req.on("data", function(data) {
        requestData += data;  
    });

    req.on("display", function() {

        app.get("/", function(req, res) {
            // add html file homepage
            res.sendFile(path.join(__dirname,"view", "home-page.html"));
          });
          
          app.get("/viewTables", function(req, res) {
            // add html file
            res.sendFile(path.join(__dirname,"view", ".html"));
          });
        
        app.get("/reservations", function(req, res) {
                // add html file
                res.sendFile(path.join(__dirname,"view", ".html"));
            });
    })
}