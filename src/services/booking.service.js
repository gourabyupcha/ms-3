const { getChannel } = require("../utils/rabbitmq");

exports.acceptBooking = async (bookingData) => {
  // Update booking status in DB to accepted
  // ...

  const channel = getChannel();
  channel.assertQueue('booking.accepted');
  channel.sendToQueue(
    'booking.accepted',
    Buffer.from(JSON.stringify(bookingData))
  );

  console.log('📨 Sent booking.accepted event');
};
