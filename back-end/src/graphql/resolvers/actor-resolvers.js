export default {
    Actor: {
        directors: ({ id }, args, { Directors }) => Directors.find({ actor : id})
    },
    Mutation: {
        createActors: async (root, { input: { name, birthday, country, movie } }, { Actors, getUser, req, SECRET }) =>
        {
            const userId = getUser(req, SECRET)

            const actor = Actors(
            { 
                name, 
                birthday, 
                country, 
                movie
            })
 
            return actor.save()
        },
    }
}