import Actors from '../../models/Actors'
import Directors from '../../models/Directors'


export default {
    Actor: {
        directors: ({ id }) => Directors.find({ actor : id})
    },
    Mutation: {
        createActors: async (root, { input: { name, birthday, country, movie } }) =>
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