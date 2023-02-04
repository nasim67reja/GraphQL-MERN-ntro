const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

// const schema = buildSchema(`
// type Query{
//   hello:String
// }`);

// const root = {
//   hello: () => {
//     return "Hello world!";
//   },
// };

const app = express();

app.use(cors());
// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
