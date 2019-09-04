import uuid from 'uuid/v4'

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

const auths =
[
    {
        token: 'aasdf',
        user:
        {
            id: uuid(),
            name: 'user 1',
            password: 'abc'
        }
    },
    {
        token: 'jfsdjf',
        user:
        {
            id: uuid(),
            name: 'user 2',
            password: '123'
        }
    },
    {
        token: 'rtbrb',
        user:
        {
            id: uuid(),
            name: 'user 3',
            password: 'adminadmin'
        }
    }
]


export default {
    Query: {
        movies: () => movies
    },
    Mutation: {
        createUser(parent, args, ctx, info) {
            const usernameTaken = auths.some(auth => auth.user.name === args.username)

            if (usernameTaken) throw new Error('Username is taken')

            const auth = 
            {
                token: uuid(),
                user:
                {
                    id: uuid(),
                    name: args.username,
                    password: args.password
                }
            }

            auths.push(auth)

            return auth
        }
    }
}