import mongoose from 'mongoose'
const Schema = mongoose.Schema

const directorsSchema = new Schema(
{
    name: String,
    birthday: String,
    country: String
})
    
export default mongoose.model('Directors', directorsSchema)