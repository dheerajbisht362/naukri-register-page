// middleware, who trim form data value
const triming = (req, res, next) => {
    if (req.url === '/register') {
        req.body.name = req.body.name.trim();
        req.body.email = req.body.email.trim();
        req.body.mobile = req.body.mobile.trim();
        req.body.workStatus = req.body.workStatus.trim();
    }
    next();
}

module.exports = triming;