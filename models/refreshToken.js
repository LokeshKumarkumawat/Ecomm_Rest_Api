import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const refreshSchema = new Schema({
    token:{ type:String, unique:true}
})



export default mongoose.model('RefreshToken',refreshSchema,'refreshTokens')