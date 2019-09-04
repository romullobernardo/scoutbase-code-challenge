import connect from 'connect'
import { ApolloServer } from 'apollo-server-express'
import query from 'qs-middleware'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

const app = connect()
const path = '/graphql'

app.use(query())
server.applyMiddleware({ app, path })


app.listen({ port: 4000 }, () => console.log(`Server listening at http://localhost:4000${server.graphqlPath}`))