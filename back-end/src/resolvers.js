import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from './models/User'
import Movies from './models/Movies'
import Actors from './models/Actors'
import Directors from './models/Directors'
const pick = require('lodash').pick


export default {
    Query: {
        loggedInUser: (root, args, { user }) => user,
        users: (root, args, { user }) =>
        {
            if (!user) throw new Error('You are not logged in to access this info')
            return User.find()
        },
        movies: () => Movies.find()
    },
    Movie: {
        actors: ({ id }) => Actors.find({ movie: id })
    },
    Actor: {
        directors: ({ id }) => Directors.find({ actor : id})
    },
    Mutation: {
        createUser: async (root, { username, password }) => 
        {
            const user = User()
            user.name = username
            user.password = await bcrypt.hash(password, 12)
            return user.save()
        },
        createMovie: async (root,{ input: { title, year, rating } }) =>
        {
            const movie = Movies(
            { 
                title, 
                year, 
                rating
            })
 
            return movie.save()
        },
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