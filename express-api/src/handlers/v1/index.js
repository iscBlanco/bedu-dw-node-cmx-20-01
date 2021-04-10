const express = require('express');
const router = express.Router();

// router.use(path, handler);
router.use('/notes', require('./notes'));
router.use('/users', require('./users'));

module.exports = router;