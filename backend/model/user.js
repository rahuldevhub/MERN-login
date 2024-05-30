import {mongoose , Schema} from 'mongoose';

const userdetailschema = new Schema({
    username : String,
    password :String,
},{versionKey:false})

const userdetail = mongoose.model("userdetailscolumn", userdetailschema)

export default userdetail