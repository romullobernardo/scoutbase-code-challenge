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

    type Query {
        movies: [Movie]
    }
`