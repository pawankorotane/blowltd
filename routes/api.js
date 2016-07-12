var express = require('express');
var router = express.Router();
var beauticianCtrl = require('../controllers/beauticians');
var bookingCtrl = require('../controllers/bookings');

router.get('/beauticians', beauticianCtrl.list);
router.post('/bookings', bookingCtrl.create);
router.get('/bookings', bookingCtrl.index);

module.exports = router;