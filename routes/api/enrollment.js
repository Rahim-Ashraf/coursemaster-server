const express = require('express');
const router = express.Router();
const enrollmentController = require('../../controllers/enrollmentController');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');


router.post('/', auth, enrollmentController.enrollInCourse);

router.get('/', auth, enrollmentController.getMyEnrolledCourses);
router.get('/enrollments/:id', [auth, admin], enrollmentController.getEnrolledCourses);
router.get('/course/:id', auth, enrollmentController.getMyEnrolledCourse);

router.put('/complete', auth, enrollmentController.updateEnrolledCourse);

module.exports = router;
