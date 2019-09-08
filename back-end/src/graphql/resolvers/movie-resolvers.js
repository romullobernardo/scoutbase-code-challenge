export default {
    Query: {
        movies: (root, args, { Movies }) => Movies.find()
    },
    Movie: {
        actors: ({ id }, args, { Actors }) => Actors.find({ movie: id }),
        scoutbase_rating: async (root, args, { req, SECRET, getUser }) =>
        {
            const userId = await getUser(req, SECRET)
            return userId ? root.scoutbase_rating : null
        }
    },
    Mutation: {
        createMovie: async (root, { input: { title, year, rating } }, { Movies }) =>
        {
            const movie = Movies(
            { 
                scoutbase_rating: (Math.random() * (9.0 - 5.0) + 5.0).toFixed(1),
                title, 
                year, 
                rating
            })
 
            return movie.save()
        }
    }
}