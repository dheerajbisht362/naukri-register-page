const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(url);
        console.log(`DB Connected Succesfully`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = dbConnection; 