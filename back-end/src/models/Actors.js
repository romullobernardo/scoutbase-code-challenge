import mongoose from 'mongoose'
const Schema = mongoose.Schema

const actorsSchema = new Schema(
{
    name: String,
    birthday: String,
    country: String
})
    
export default mongoose.model('Actors', actorsSchema)