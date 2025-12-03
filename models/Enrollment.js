const mongoose = require('mongoose');
const { Schema } = mongoose;

const EnrollmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
    },
    progress: {
        type: Number,
        default: 0,
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Enrollment = mongoose.model('enrollment', EnrollmentSchema);