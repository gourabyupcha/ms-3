const bookingService = require('../services/booking.service');

exports.createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.acceptBooking = async (req, res) => {
  try {
    const booking = await bookingService.acceptBooking(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
