const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.auth || req.header("auth") ||  req.query.auth || req.header("token") || req.cookies.token || req.query.token
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorised" })
        }
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error })
    }
}

module.exports = checkAuth