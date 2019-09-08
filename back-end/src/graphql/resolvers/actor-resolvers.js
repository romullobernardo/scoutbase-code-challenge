export default {
    Actor: {
        directors: ({ id }, args, { Directors }) => Directors.find({ actor : id})
    },
    Mutation: {
        createActors: async (root, { input: { name, birthday, country, movie } }, { Actors }) =>
        {
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