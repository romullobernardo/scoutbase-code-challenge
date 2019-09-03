import { gql } from 'apollo-server'

export default gql`

    type Movie {
            _id: ID
            name: String
        }

    type Query {
        test: Movie
    }
`