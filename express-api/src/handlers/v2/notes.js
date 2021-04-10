const express = require('express');
const router = express.Router();

// router.use(path, handler);

// GET /
router.get('/', (req, res) => {
  res.json({
    info: {
      count: 0,
    },
    results: [],
  });
});

// POST /
router.post('/', (req, res) => { 
  res.status(201).json();
});

module.exports = router;