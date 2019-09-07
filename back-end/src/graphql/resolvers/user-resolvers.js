import { sign, decode, verify } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../models/User'
const pick = require('lodash').pick


// const token = sign({ id: 46 }, 'qwepiuiqewru')
// console.log(token) 

// const decoded = decode(token)
// console.log(decoded)

// const verified = verify(token, 'qwepiuiqewru')
// console.log(verified)



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


            // const token = await jwt.sign({ user: pick(user, ["_id", "username"])}, SECRET, { expiresIn: "1d" })
            const token = await sign({ user: user.id, name: user.username }, SECRET, { expiresIn: "1d" })

            // const refreshToken = sign({ userId: user.id, count: user.count }, SECRET, { expiresIn: '1d' })
            // const accessToken = sign({ userId: user.id }, SECRET, {expiresIn: '15min'})

            return user
            // return token
        }
    }
}