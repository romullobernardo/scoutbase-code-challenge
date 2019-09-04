import { gql } from 'apollo-server'

export default gql`

    type Movie {
            title: String
            year: String
            rating: Float
            actors: [Actor]
        }

    type Actor {
        name: String
        birthday: String
        country: String
        directors: [Director]
    }

    type Director {
        name: String
        birthday: String
        country: String
    }

    type User {
        id: ID!
        name: String!
    }

    type Auth {
        token: String!
        user: User!
    }
    
    type Query {
        movies: [Movie]
    }

    type Mutation {
        createUser(username: String!, password: String!): Auth!
    }
`