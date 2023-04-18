const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.URL;

const dbConnection = async () => {
    try {
        await mongoose.connect(URL);
        console.log(`DB Connected Succesfully`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = dbConnection; 