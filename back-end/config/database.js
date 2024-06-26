
// Load .env variables (locally only)
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to database')
    } catch(err) {
        console.log(err);
    }
    
}

module.exports = connectDB;