import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from './models/User'
import Movies from './models/Movies'
const pick = require('lodash').pick

const movies =
[
    {
        title: 'movie 1',
        year: 1994,
        rating: 4.5,
        actors: 
        [
            {
                name: 'Actor 1',
                birthday: 'March 1',
                country: 'South Georgia and the South Sandwich Islands',
                directors :
                [
                    {
                        name: 'Director 1',
                        birthday: 'June 15',
                        country: 'Angola'
                    },
                    {
                        name: 'Director 2',
                        birthday: 'December 24',
                        country: 'Kyrgyzstan'
                    },
                ]
            },
            {
                name: 'Actor 2',
                birthday: 'February 31',
                country: 'Burundi',
                directors :
                [
                    {
                        name: 'Director 3',
                        birthday: 'April 15',
                        country: 'Panama'
                    },
                    {
                        name: 'Director 4',
                        birthday: 'August 1',
                        country: 'Bangladesh'
                    },
                ]
            },
        ]
    },
    {
        title: 'movie 2',
        year: 2018,
        rating: 1.5
    },
    {
        title: 'movie 3',
        year: 2009,
        rating: 2.3
    },
]


export default {
    Query: {
        loggedInUser: (root, args, { user }) => user,
        users: (root, args, { user }) =>
        {
            if (!user) throw new Error('You are not logged in to access this info')
            return User.find()
        },
        movies: () => movies
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