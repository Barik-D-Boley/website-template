const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: [true, 'Must provide your name'],
        trim: true,
        maxLength: [100, 'Name cannot be more than 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Must provide an email']
    },
    password: {
        type: String,
        required: [true, 'Must provide an email']
    }
});

module.exports = mongoose.model('User', UserSchema);