const express = require('express');
const { handleProcessNumber, handleGetFiles } = require('../controllers/processController');
const router = express.Router();

router.post('/process-number', handleProcessNumber);
router.get('/files', handleGetFiles);

module.exports = router;
