import 'reflect-metadata';
import 'dotenv/config';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { UserResolver } from './resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ],
    container: Container,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({
    schema,
    cache: 'bounded'
  });

  const { url } = await server.listen(3333);
  console.log(`Server running on ${url}`)
}

main();
