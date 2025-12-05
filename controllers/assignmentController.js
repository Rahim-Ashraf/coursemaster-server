const Course = require('../models/Course');
const Assignment = require('../models/Assignment');

exports.submitAssignment = async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const userId = req.user.id;
    try {
        // Check if course exists
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        const assignment = new Assignment({
            user: userId,
            course: id,
            submission: data.assignment
        });

        await assignment.save();
        res.json(assignment);

    } catch (err) {
        console.log("err",err.message);
        res.status(500).send('Server Error', err.message);
    }
};
exports.getAssignments = async (req, res) => {
    try {
        const assignment = await Assignment.find().populate('user')
        res.json(assignment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message)
    }
};