const express = require('express');
const router = express.Router();
const registration  = require("../controllers/userController");
const validation = require('../middleware/validation');
const triming = require('../middleware/triming');

router.post('/register', triming, validation, registration);

module.exports = router;