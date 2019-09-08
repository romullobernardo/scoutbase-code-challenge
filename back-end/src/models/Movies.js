import mongoose from 'mongoose'
const Schema = mongoose.Schema

const moviesSchema = new Schema(
{
    scoutbase_rating: String,
    title: String,
    year: Number,
    rating: Number,
    actors: 
    {
        type: Schema.Types.ObjectId,
        ref: 'Actors'
    }
})
    
export default mongoose.model('Movies', moviesSchema)
    
