import Directors from '../../models/Directors'


export default {
    Actor: {
        directors: ({ id }) => Directors.find({ actor : id})
    },
    Mutation: {
        createDirectors: async (root, {input: { name, birthday, country, actor } }) =>
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