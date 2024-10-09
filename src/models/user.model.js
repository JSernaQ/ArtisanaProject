const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = { User };