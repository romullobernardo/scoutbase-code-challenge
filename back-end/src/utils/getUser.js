import { verify } from 'jsonwebtoken'

export default (req, SECRET) =>
{
    const header = req.headers.authentication

    if (!header) throw new Error('Authentication required')

    const decoded = verify(header, SECRET)

    return decoded.user.id
}
