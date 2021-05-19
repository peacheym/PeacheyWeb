const cors = require("cors");
var express = require("express");
const path = require("path");

var app = express();
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port: 3000");
});
