const User = require("../models/userModel");
const registration = async (req, res) => {

    const { name, email, password, mobile, workStatus, resume, whatsappNewsletter } = req.body;

    try {
        const user = await User.create(req.body);
        res.send(user);
    } catch (error) {
        console.log(error)
    }

}

module.exports = registration;