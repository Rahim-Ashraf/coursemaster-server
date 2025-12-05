const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');


exports.enrollInCourse = async (req, res) => {
    const { courseId } = req.body;
    const userId = req.user.id;

    try {
        // Check if course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        // Check if already enrolled
        let enrollment = await Enrollment.findOne({
            user: userId,
            course: courseId,
        });

        if (enrollment) {
            return res.status(400).json({ msg: 'Already enrolled in this course' });
        }

        enrollment = new Enrollment({
            user: userId,
            course: courseId,
        });

        await enrollment.save();
        res.json(enrollment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message);
    }
};
exports.updateEnrolledCourse = async (req, res) => {
    const { courseId } = req.body;
    const userId = req.user.id;

    try {

        // Check if exists
        const isExist = await Enrollment.findOne({ user: userId, course: courseId })
        if (!isExist)
            return res.status(404).json({ msg: 'Enrollment not found' });

        const enrollment = await Enrollment.findOneAndUpdate(
            { user: userId, course: courseId },
            { progress: 1 },
            { new: true }
        );

        res.json(enrollment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message);
    }
};

exports.getMyEnrolledCourses = async (req, res) => {
    const userId = req.user.id;

    try {
        const enrollments = await Enrollment.find({ user: userId }).populate('course')
        const filterEnrollments = enrollments.filter(item => {
            return item.course
        })
        res.json(filterEnrollments);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message)
    }
};
exports.getEnrolledCourses = async (req, res) => {
    const courseId = req.params.id
    try {
        const enrollments = await Enrollment.find({ course: courseId }).populate('user')
        const filterEnrollments = enrollments.filter(item => {
            return item.course
        })
        res.json(filterEnrollments);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message)
    }
};
exports.getMyEnrolledCourse = async (req, res) => {
    const courseId = req.params.id;
    const userId = req.user.id;

    try {
        const enrollment = await Enrollment.findOne({ user: userId, course: courseId }).populate('course')
        res.json(enrollment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message)
    }
};
