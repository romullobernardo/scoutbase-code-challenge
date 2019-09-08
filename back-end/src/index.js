import express from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { verify } from 'jsonwebtoken'

import User from './models/User'
import Movies from './models/Movies'
import Actors from './models/Actors'
import Directors from './models/Directors'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

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
        const token = req && req.headers && req.headers.authorization

        if (token) 
        {
            const data = verify(token, SECRET)
            const user = data.user.name ? await User.findOne({ name: data.user.name }) : null
            console.log(user)

            return { SECRET, user, Movies, Actors, Directors, User }
        }

        return { Movies, Actors, Directors, User }
    }
})

server.applyMiddleware({ app, path })


app.listen(PORT, () => console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`))