const jwt = require('jsonwebtoken')

const createToken = (userid, role) => {
    const data = {
        user: {
            id: userid,
            role: role
        }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    return authToken
}

module.exports = createToken
