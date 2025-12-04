const Course = require('../models/Course');


exports.getCourses = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const sort = req.query.sort || '';
        const filter = req.query.filter || '';

        const query = {};
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { instructor: { $regex: search, $options: 'i' } },
            ];
        }
        if (filter) {
            query.category = filter;
        }

        const sortOrder = {};
        if (sort === 'asc') {
            sortOrder.price = 1;
        } else if (sort === 'desc') {
            sortOrder.price = -1;
        }

        const startIndex = (page - 1) * limit;
        const totalCourses = await Course.countDocuments(query);

        const courses = await Course.find(query)
            .sort(sortOrder)
            .limit(limit)
            .skip(startIndex);

        res.json({
            success: true,
            courses,
            totalCourses,
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message);
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.json(course);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error', err.message);
    }
};

exports.createCourse = async (req, res) => {
    try {
        const newCourse = new Course({
            ...req.body,
        });

        const course = await newCourse.save();
        res.json(course);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error', err.message);
    }
};

exports.updateCourse = async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        course = await Course.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(course);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error', err.message);
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }

        await course.remove();

        res.json({ msg: 'Course removed' });

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error', err.message)
    }
};
