import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import User from './models/User'
import Movies from './models/Movies'
import Actors from './models/Actors'
import Directors from './models/Directors'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

import getUser from './utils/getUser'

const PORT = process.env.PORT || 4000
const path = '/graphql'
const app = express()

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('📡  DB Connected!'))
    .catch(err => console.error(err))


const server = new ApolloServer(
{ 
    typeDefs, 
    resolvers,
    context: async ({ req }) => 
    {
        const SECRET = process.env.SECRET
        return { SECRET, Movies, Actors, Directors, User, getUser, req }
    }
})

server.applyMiddleware({ app, path })


app.listen(PORT, () => console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`))