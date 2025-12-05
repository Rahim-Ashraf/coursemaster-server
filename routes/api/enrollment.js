const express = require('express');
const router = express.Router();
const enrollmentController = require('../../controllers/enrollmentController');
const auth = require('../../middleware/auth');


router.post('/', auth, enrollmentController.enrollInCourse);

router.get('/', auth, enrollmentController.getMyEnrolledCourses);
router.get('/course/:id', auth, enrollmentController.getMyEnrolledCourse);

router.put('/complete', auth, enrollmentController.updateEnrolledCourse);

module.exports = router;
