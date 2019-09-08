import { sign } from 'jsonwebtoken'
import { compare, hash } from 'bcrypt'

export default {
    Query: {
        loggedInUser: async (root, args, { getUser, req, User, SECRET }) => 
        {
            const userId = await getUser(req, SECRET)
            console.log('RETURNED: ', userId)
            return User.findOne({ _id: userId })
        },
        users: (root, args, { User }) => User.find()
    },
    Mutation: {
        createUser: async (root, { username, password }, { SECRET, User }) => 
        {
            const user = User()
            user.name = username
            user.password = await hash(password, 12)
            user.save()

            return {
                user,
                token: sign({ userId: user.name }, SECRET, { expiresIn: '10m' })
            }
        },
        login: async (root, { username, password }, { SECRET, User }) => 
        {
            // ...
            const user = await User.findOne({ name: username })
            if (!user) throw new Error("No user found!")

            const isValid = await compare(password, user.password)
            if (!isValid) throw new Error("Incorrect password")
            // ... LOGGED IN ...

            const { name, id } = user
            return {
                user,
                token: sign({ user: { name, id } }, SECRET, { expiresIn: '10m' })
            }
        }
    }
}