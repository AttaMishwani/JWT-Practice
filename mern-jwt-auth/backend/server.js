require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require('./config/db');

const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth" , require("./routes/auth-router"))
app.get("/", (req , res)=>{
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
