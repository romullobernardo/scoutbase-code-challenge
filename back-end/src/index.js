import connect from 'connect'
import { ApolloServer } from 'apollo-server-express'
import query from 'qs-middleware'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const PORT = 4000

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.error(err))


const app = connect()
const path = '/graphql'

app.use(query())

const server = new ApolloServer(
{ 
    typeDefs, 
    resolvers,
    context: async ({ req }) => 
    {
        const token = await req.headers["authentication"]
        let user
        const SECRET = process.env.SECRET

        try 
        {
            user = await jwt.verify(token, SECRET)
            console.log(`${user.user} user`)
        } 
        catch (error) 
        {
            console.log(`Error: ${error.message}`)
        }

        return { user, SECRET }
    }
})

server.applyMiddleware({ app, path })


app.listen({ port: PORT }, () => console.log(`Server listening at http://localhost:${PORT}${server.graphqlPath}`))