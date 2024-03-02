// Route logic for APIs call

const express = require('express')
const router = express.Router();

const { clearAndAdd, updateResData, getCounterData } = require('../controllers/componentAPIs');

router.route('/').get(getCounterData).post(clearAndAdd).patch(updateResData);

module.exports = router;