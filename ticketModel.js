import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['open','close','in progress'],
        default:'open'
    },
    creationDate:{
        type:Date,
        default:Date.now()
    },
    lastupdatedDate:{
        type:Date,
        default:Date.now()
    },

})

export default mongoose.model('users',ticketSchema);