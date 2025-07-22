const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is requrired"],
        trim: true,
        maxLength: [100, "Book title cannot exceeds more than 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Author name is requrired"],
        trim: true
    },
    year: {
        type: Number,
        required: [true, "Year is requrired"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', bookSchema);