const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const assignmentController = require('../../controllers/assignmentController');


router.post('/:id', auth, assignmentController.submitAssignment);

router.get('/', [auth, admin], assignmentController.getAssignments);

module.exports = router;