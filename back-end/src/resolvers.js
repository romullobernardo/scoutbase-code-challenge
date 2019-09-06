import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from './models/User'
import Movies from './models/Movies'
import Actors from './models/Actors'
import Directors from './models/Directors'
const pick = require('lodash').pick

const movies =
[
    {
        id: '1',
        title: 'movie 1',
        year: 1994,
        rating: 4.5
    },
    {
        id: '2',
        title: 'movie 2',
        year: 2018,
        rating: 1.5
    },
    {
        id: '3',
        title: 'movie 3',
        year: 2009,
        rating: 2.3
    },
]

const actors =
[
    {
        id: '1',
        name: 'Actor 1',
        birthday: 'March 1',
        country: 'South Georgia and the South Sandwich Islands',
        movie: '1'
    },
    {
        id: '2',
        name: 'Actor 2',
        birthday: 'February 31',
        country: 'Burundi',
        movie: '1'
    },
]

const directors =
[
    {
        id: '1',
        name: 'Director 1',
        birthday: 'June 15',
        country: 'Angola',
        actor: '1'
    },
    {
        id: '2',
        name: 'Director 2',
        birthday: 'December 24',
        country: 'Kyrgyzstan',
        actor: '1'
    },
    {
        id: '3',
        name: 'Director 3',
        birthday: 'April 15',
        country: 'Panama',
        actor: '2'
    },
    {
        id: '4',
        name: 'Director 4',
        birthday: 'August 1',
        country: 'Bangladesh',
        actor: '2'
    }
]

export default {
    Query: {
        loggedInUser: (root, args, { user }) => user,
        users: (root, args, { user }) =>
        {
            if (!user) throw new Error('You are not logged in to access this info')
            return User.find()
        },
        movies: () => movies,
        moviesDB: () => Movies.find()
    },
    Movie: {
        actors: ({ id }) => actors.filter(actor => actor.movie === id)
    },
    Actor: {
        directors: ({ id }) => directors.filter(director => director.actor === id)
    },
    Mutation: {
        createUser: async (root, { username, password }) => 
        {
            const user = User()
            user.name = username
            user.password = await bcrypt.hash(password, 12)
            return user.save()
        },
        createMovie: async (root, { title, year, rating }) =>
        {
            const movie = Movies(
            { 
                title, 
                year, 
                rating 
            })
 
            return movie.save()
        },
        createActors: async (root, { name, birthday, country, movie }) =>
        {
            const actor = Actors(
            { 
                name, 
                birthday, 
                country
            })
 
            return actor.save()
        },
        createDirectors: async (root, { name, birthday, country, actor }) =>
        {
            const director = Directors(
            { 
                name, 
                birthday, 
                country
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