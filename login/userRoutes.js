// Express Router Setup
const express = require('express');
const router = express.Router();

// Import Controllers
const { getAllUsers, deleteAllUsers, updateUser, deleteUser, createUser, getUser } = require('./userController');

router.route('/').get(getAllUsers).delete(deleteAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;