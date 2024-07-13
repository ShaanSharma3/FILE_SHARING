import express from "express"
import router from "./routes/route.js";
import cors from "cors";
import DBconnection from "./database/db.js";
const app = express();//construct express app

app.use(cors()); //to handle browser error when backend and frontend is not rotting in same server or port
app.use('/',router); //jb router empty ha to traffic router mein shift kr do


const PORT = 8000; //port num

DBconnection();
//to start server use lister contsin two parameters port number and call back function
//call back funtion tell what we run after server start running
app.listen(PORT , ()=> console.log(`server is running at ${PORT}`)) 

