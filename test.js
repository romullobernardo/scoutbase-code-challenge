const token = req && req.headers && req.headers.authorization

console.log(req.headers)

if (token) 
{
    const data = verify(token, SECRET)
    const user = data.user.name ? await User.findOne({ name: data.user.name }) : null
    // console.log(user)

    return { SECRET, user, Movies, Actors, Directors, User }
}