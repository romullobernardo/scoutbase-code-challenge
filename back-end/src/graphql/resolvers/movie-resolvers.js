import Movies from '../../models/Movies'
import Actors from '../../models/Actors'


export default {
    Query: {
        movies: () => Movies.find()
    },
    Movie: {
        actors: ({ id }) => Actors.find({ movie: id })
    },
    Mutation: {
        createMovie: async (root,{ input: { title, year, rating } }) =>
        {
            const movie = Movies(
            { 
                title, 
                year, 
                rating
            })
 
            return movie.save()
        }
    }
}