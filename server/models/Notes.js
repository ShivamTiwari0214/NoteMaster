const mongoose = require('mongoose');
const {Schema} = mongoose ;


const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    descricption:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        rquired:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Notes',NotesSchema);