import mongoose from 'mongoose';  // use to create connection with mongo db

const MONGODB_URI = `mongodb+srv://shaan1:shaan27@filesharing.umr0gsx.mongodb.net/?retryWrites=true&w=majority&appName=FileSharing`;
const DBconnection = async() =>{
  try{
await mongoose.connect(MONGODB_URI , {useNewUrlParser : true});
console.log("connection Established");
  } 
  catch(error){
    console.log("Error while connecting with data base", error.message);
  } 
}

export default DBconnection;