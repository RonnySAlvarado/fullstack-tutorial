const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

const port = 5000;

server.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});
