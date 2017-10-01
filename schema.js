const fetch = require('node-fetch');
const {GraphQLSchema, GraphQLObjectType} = require('graphql');

fetch('https://jsonplaceholder.typicode.com/posts').then(result => result.json());
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    fileds: () => ({
      
    })
  })
});
