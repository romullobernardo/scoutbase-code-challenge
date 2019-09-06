import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../models/User'
const pick = require('lodash').pick


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
        createUser: async (root, { username, password }) => 
        {
            const user = User()
            user.name = username
            user.password = await bcrypt.hash(password, 12)
            return user.save()
        },
        login: async (root, { username, password }, { SECRET }) => 
        {
            const user = await User.findOne({ name: username })
            if (!user) throw new Error("No user found ")

            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid) throw new Error("Incorrect password ")

            const token = await jwt.sign({ user: pick(user, ["_id", "username"])}, SECRET, { expiresIn: "1d" })

            return token
        }
    }
}