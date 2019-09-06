import mongoose from 'mongoose'
const Schema = mongoose.Schema

const moviesSchema = new Schema(
{
    title: String,
    year: Number,
    rating: Number
})
    
export default mongoose.model('Movies', moviesSchema)
    
