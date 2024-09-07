const mongoose = require('mongoose');

async function DBConnection() {
    try {
        
        await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@artisanaproject.taphx.mongodb.net/ArtisanaDB?retryWrites=true&w=majority&appName=ArtisanaProject`);

        console.log('Connected to DB');

        mongoose.connection.on('error', (error) => {
            console.error('Mongoose connection error:', error);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = { DBConnection };