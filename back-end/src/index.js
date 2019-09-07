import connect from 'connect'
import express from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { verify } from 'jsonwebtoken'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const PORT = process.env.PORT || 4000

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.error(err))


const app = connect()
const path = '/graphql'

app.use(express.json())

const server = new ApolloServer(
{ 
    typeDefs, 
    resolvers,
    context: async ({ req }) => 
    {
        const token = req.headers["authentication"] // talvez await
        const SECRET = process.env.SECRET

        // const user = await verify(token, SECRET)
        let user

        try 
        {
            user = await verify(token, SECRET)
            console.log(`${user.user} user`)
        } 
        catch (error) 
        {
            // throw new AuthenticationError('Authentication token is invalid')
            console.log(`Error: ${error.message}`)
        }

        return { user, SECRET, token }
    }
})

server.applyMiddleware({ app, path })


app.listen({ port: PORT }, () => console.log(`🚀  Server listening at http://localhost:${PORT}${server.graphqlPath}`))