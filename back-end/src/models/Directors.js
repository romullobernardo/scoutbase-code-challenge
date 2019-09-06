import mongoose from 'mongoose'
const Schema = mongoose.Schema

const directorsSchema = new Schema(
{
    name: String,
    birthday: String,
    country: String,
    actor:
    {
        type: Schema.Types.ObjectId,
        ref: 'Actors'
    }
})
    
export default mongoose.model('Directors', directorsSchema)