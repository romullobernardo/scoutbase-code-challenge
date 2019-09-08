export default {
    Actor: {
        directors: ({ id }, args, { Directors }) => Directors.find({ actor : id})
    },
    Mutation: {
        createDirectors: async (root, {input: { name, birthday, country, actor } }, { Directors }) =>
        {
            const director = Directors(
            { 
                name, 
                birthday, 
                country,
                actor
            })
 
            return director.save()
        }
    }
}