const jwt = require('jsonwebtoken');

const generateJWT = (uid, userName, rol) => {
    try {
        return jwt.sign({ uid, userName, rol }, process.env.JWTSECRET, { expiresIn: '8h' });
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    generateJWT
}