const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssignmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
    },
    submission: {
        type: String,
        required: true,
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Assignment = mongoose.model('assignment', AssignmentSchema);