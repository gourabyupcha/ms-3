const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.post('/', bookingController.createBooking);
router.patch('/:id/accept', bookingController.acceptBooking);

module.exports = router;
