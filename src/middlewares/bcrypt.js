const bcryptjs = require('bcryptjs');

const encrypt = async (text) => {
    const hashed = await bcryptjs.hash(text, 10);
    return hashed;
};

const decrypt = async (text, hashed) => {    
    return await bcryptjs.compare(text, hashed);
};

module.exports = { encrypt, decrypt };
