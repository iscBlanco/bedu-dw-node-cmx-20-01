const express = require('express');
const router = express.Router();

// router.use(path, handler);

router.get('/', (req, res) => {
  res.redirect('/api/v1/notes');
});

router.use('/v1', require('./v1'));
router.use('/v2', require('./v2'));

module.exports = router;