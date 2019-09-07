import { sign } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../models/User'


export default {
    Query: {
        loggedInUser: (root, args, { user }) => user,
        users: (root, args, { user }) =>
        {
            if (!user) throw new Error('You are not logged in to access this info')
            return User.find()
        }
    },
    Mutation: {
        createUser: async (root, { username, password }, { SECRET }) => 
        {
            const user = User()
            user.name = username
            user.password = await bcrypt.hash(password, 12)
            user.save()

            return {
                user,
                token: sign({ userId: user.name }, SECRET)
            }
        },
        login: async (root, { username, password }, { SECRET }) => 
        {
            // ...
            const user = await User.findOne({ name: username })
            if (!user) throw new Error("No user found ")

            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid) throw new Error("Incorrect password ")
            // ... LOGGED IN ...


           
        }
    }
}