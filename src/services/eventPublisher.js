const axios = require('axios');

const BROKER_SERVICE_URL = process.env.BROKER_SERVICE_URL || 'http://localhost:6000/api/events';

const publishEvent = async (eventType, payload) => {
  try {
    await axios.post(BROKER_SERVICE_URL, {
      type: eventType,
      payload
    });
    console.log(`📨 Event sent to broker service: ${eventType}`);
  } catch (err) {
    console.error('❌ Failed to publish event:', err.message);
  }
};

module.exports = { publishEvent };
