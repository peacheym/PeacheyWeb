// var { graphqlHTTP } = require("express-graphql");
// var { buildSchema } = require("graphql");
const cors = require("cors");
var express = require("express");
const path = require("path");
// const gqlSchema = require("./schema");
// const gqlResolvers = require("./resolvers");

var app = express();
app.use(cors());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: gqlSchema,
//     rootValue: gqlResolvers,
//     graphiql: true,
//   })
// );

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port: 3000");
});
