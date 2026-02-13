require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require('./config/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./routes/contact-router');

const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use("/api/auth" , require("./routes/auth-router"))
app.use("/api/form" , contactRoute)

app.get("/", (req , res)=>{
    res.send("API is running...");
});

app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`, process.env.JWT_SECRET
));
