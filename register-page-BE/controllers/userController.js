const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const {  anAccountWithThisEmailAddressAlreadyExists } = require("../constants/errors")

const registration = async (req, res) => {
    try {
        const { email } = req.body;
        const isEmailExist = await User.findOne({ email });
        if (isEmailExist) {
            res.status(400).json({ message:anAccountWithThisEmailAddressAlreadyExists, field: "email" });
        } else {
            const user = await User.create(req.body);
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            res.setHeader('Set-Cookie', `token=${token}`);
            res.status(201).json({ "msg": "user added succesfully", user });
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = registration;