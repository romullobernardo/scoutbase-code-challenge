import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs'
import resolvers from './resolvers'


const server = new ApolloServer(
{
    typeDefs,
    resolvers
})

server
    .listen({ port: 4001 })
    .then(({ url }) => console.log(`Server listening on ${url}`))