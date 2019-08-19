// @flow
const { ApolloServer, gql } = require('apollo-server-micro');

// test function with flow
function test(input: string) {
  console.log(input);
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello world!';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

module.exports = server.createHandler({ path: '/api' });
