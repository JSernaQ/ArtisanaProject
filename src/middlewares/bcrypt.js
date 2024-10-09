const bcryptjs = require('bcryptjs');

const encrypt = (text) => {
    return hashed = bcryptjs.hashSync(text, 10);
};

const decrypt = (text, hashed) => {
    return bcryptjs.compare(text, hashed);
};

module.exports = { encrypt, decrypt };