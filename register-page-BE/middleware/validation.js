const { fullNameIsRequired, numericAndSpecialCharactersAreNotAllowed, emailIdIsRequired, pleaseEnterAValidEmailId, passwordIsRequired, passwordShouldBeAMinimumOf6Characters, aMobileNumberIsRequired, pleaseEnterYour10DigitsMobileNumber, workStatusIsRequired, theCurrentCityIsRequired, resumeIsRequired } = require("../constants/errors")
const { NAME, EMAIL, PASSWORD, MOBILE, WORK_STATUS, RESUME } = require("../constants/fields")

// middleware who validate form data for registration
const validation = (req, res, next) => {

    const { name, email, password, mobile, workStatus, city, resume } = req.body;

    // validate email
    function validateEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    if (name === "") {

        res.status(400).json({ "msg": fullNameIsRequired, "field": NAME });

    } else if (!name.match(/^[a-zA-Z\s]*$/g)) {

        res.status(400).json({ "msg": numericAndSpecialCharactersAreNotAllowed, "field": NAME });

    } else if (email === "") {

        res.status(400).json({ "msg": emailIdIsRequired, "field": EMAIL });

    } else if (!validateEmail(email)) {

        res.status(400).json({ "msg": pleaseEnterAValidEmailId, "field": EMAIL });

    } else if (!password) {

        res.status(400).json({ "msg": passwordIsRequired, "field": PASSWORD });

    } else if (password.length < 6) {

        res.status(400).json({ "msg": passwordShouldBeAMinimumOf6Characters, "field": PASSWORD });

    } else if (!mobile) {

        res.status(400).json({ "msg": aMobileNumberIsRequired, "field": MOBILE });

    }else if (isNaN(Number(mobile))) {

        res.status(400).json({ "msg": numericAndSpecialCharactersAreNotAllowed, "field": MOBILE });

    }else if (mobile.length !== 10) {

        res.status(400).json({ "msg": pleaseEnterYour10DigitsMobileNumber, "field": MOBILE });

    }else if (!workStatus) {

        res.status(400).json({ "msg": workStatusIsRequired, "field": WORK_STATUS });

    }else if (workStatus === "fresher" && !city) {

        res.status(400).json({ "msg": theCurrentCityIsRequired, "field": WORK_STATUS });

    }else if (!resume) {

        res.status(400).json({ "msg": resumeIsRequired, "field": RESUME });
        
    }else {
        next();
    }
}

module.exports = validation;