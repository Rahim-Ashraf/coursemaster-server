const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    syllabus: [
        {
            module: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
        },
    ],
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Course = mongoose.model('course', CourseSchema);