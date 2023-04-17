const express = require('express');
const app = express();
require("dotenv").config();
const registerRoute = require('./routes/registerRoute');

app.use("/", registerRoute)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})