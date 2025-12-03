const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/courseController');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');


router.get('/', courseController.getCourses);

router.get('/:id', courseController.getCourseById);

router.post('/', [auth, admin], courseController.createCourse);

router.put('/:id', [auth, admin], courseController.updateCourse);

router.delete('/:id', [auth, admin], courseController.deleteCourse);

module.exports = router;
