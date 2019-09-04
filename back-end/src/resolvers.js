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
        movies: () => movies
    },
    Mutation: {
        createUser(parent, args, ctx, info) {
            console.log(args)
        }
    }
}