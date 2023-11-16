const express = require ("express");
const connectDB = require("./config/db.js");
const dotenv= require("dotenv").config();
const cors = require("cors");

const port = 7777;
 connectDB();

const app = express(); 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use("/products", require("./routers.js"))


 app.listen (port, ()=> console.log("server bien connecté")) ;