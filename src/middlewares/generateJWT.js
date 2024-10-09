const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "8h"
    });

    return token;
};

module.exports = { generateJWT }