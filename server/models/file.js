import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    downloadContent:{
        type: Number,
        required: true,
        default: 0
    }

})

//VALIDATION THAT WE ARE STROING IS CORRECT
const File = mongoose.model('file', fileSchema);
//here file is to give name of the table in data base
//2nd arg tell that validate file acc to fileschema we nade above

export default File;
