const mongoose = require('mongoose');

async function DBConnection() {
    try {
        
        await mongoose.connect(`${process.env.URI_DB}`);
        console.log('Connected to DB');

        mongoose.connection.on('error', (error) => {
            console.error('Mongoose connection error:', error);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = { DBConnection };