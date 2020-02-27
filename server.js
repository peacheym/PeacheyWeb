var express = require("express")
var app = express();

//Main route
app.get("/",function(req,res){
  res.send("Hello, world");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running");
});
