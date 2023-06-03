const { startServerAndCreateNextHandler } = require('@as-integrations/next');
const { ApolloServer } = require('@apollo/server');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// HANDLER TO BE EXPORTED FOR API ROUTES
const handler = startServerAndCreateNextHandler(server);

module.exports = handler;