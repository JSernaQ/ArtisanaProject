const mongoose = require('mongoose');

async function connection() {
    try {

        await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@artisanaproject.taphx.mongodb.net/ARTISANA?retryWrites=true&w=majority&appName=ArtisanaProject`);

        console.log('Connected to DB');

        mongoose.connection.on('error', (error) => {
            console.error('Mongoose connection error:', error);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}