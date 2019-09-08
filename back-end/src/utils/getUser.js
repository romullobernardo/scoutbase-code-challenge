import { verify } from 'jsonwebtoken'

export default (req, SECRET) =>
{
    const header = req.headers.authentication
    
    try
    {
        const decoded = verify(header, SECRET)
        return decoded.user.id
    }
    catch (err)
    {
        return false
    }
}
