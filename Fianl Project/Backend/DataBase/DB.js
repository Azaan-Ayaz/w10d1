 const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const DataBase = async()=>{
try {
    await mongoose.connect("mongodb+srv://sulemanahmed27048:neon123@cluster0.otnrxs3.mongodb.net/client")
        console.log(`DataBase is Connected to Server `.bgGreen.black);
} catch (error) {
    console.log({
        message: "DataBase is not connected",
        error : error
    });
}
}
module.exports = DataBase