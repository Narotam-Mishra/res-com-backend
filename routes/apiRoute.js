// Route logic for APIs call

const express = require('express')
const router = express.Router();

const { clearAndAdd, updateResData, getCounterData } = require('../controllers/componentAPIs');

router.route('/getCount').get(getCounterData);
router.route('/add').get(clearAndAdd);
router.route('/updateData').patch(updateResData);

module.exports = router;