import mongoose from 'mongoose'
const Schema = mongoose.Schema

const actorsSchema = new Schema(
{
    name: String,
    birthday: String,
    country: String,
    movie:
    {
        type: Schema.Types.ObjectId,
        ref: 'Movies'
    }
})
    
export default mongoose.model('Actors', actorsSchema)