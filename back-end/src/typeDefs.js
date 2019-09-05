import { gql } from 'apollo-server-express'

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

    type Query {
        loggedInUser: User
        movies: [Movie]
        users: [User]
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
        login(username: String!, password: String!): String!
    }
`