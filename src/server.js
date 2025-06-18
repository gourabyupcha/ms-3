// server.js
const http = require('http');
const app = require('./app');
// const { redisClient } = require('./src/config/redisClient');
const { connectRabbitMQ } = require('./utils/rabbitmq');
const { connectToDatabase } = require('./config/db');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

(async () => {
  await connectToDatabase();
  await connectRabbitMQ();

  app.listen(5002, () => console.log('🚀 Payment Service running'));
})();

// Graceful shutdown
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
  console.log('🛑 Gracefully shutting down...');
  server.close(() => {
    console.log('✅ HTTP server closed');
    redisClient.quit().then(() => {
      console.log('🔌 Redis client closed');
      process.exit(0);
    });
  });
}