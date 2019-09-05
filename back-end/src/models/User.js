import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema(
{
    name: String,
    password: String
})
    
export default mongoose.model('User', userSchema)
    
