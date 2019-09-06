import { gql } from 'apollo-server-express'

export default gql`

    type Movie {
        id: ID!
        title: String
        year: String
        rating: Float
        actors: [Actor]
    }

    type Actor {
        id: ID!
        name: String
        birthday: String
        country: String
        directors: [Director]
    }

    type Director {
        id: ID!
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
        moviesDB: [Movie]
        users: [User]
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
        createMovie(title: String!, year: Int!, rating: Float!): Movie!
        login(username: String!, password: String!): String!
    }
`