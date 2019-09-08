import { verify } from 'jsonwebtoken'

export default (req, SECRET) =>
{
    const header = req.headers.authentication

    console.log('HEADER: ', header)

    if (!header) throw new Error('Authentication required')

    const decoded = verify(header, SECRET)

    console.log('DECODED: ', decoded)
    console.log('USER ID: ', decoded.user.id)

    return decoded.user.id
}
