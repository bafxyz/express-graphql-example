const express = require("express");
const graphqlHTTP = require('express-graphql');

const app = express();
const port = 4000;
const schema = require('./schema');

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(port, ()=> {
  console.log('Listening ', port);
});
