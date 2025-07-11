const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('express-async-errors');

// const rateLimiter = require('./middleware/rateLimitter')
const routes = require('./routes/booking.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(compression());
app.use(express.json());

// app.use(rateLimiter);

// ⚡ Option 1: Apply cache to all GET routes under /api/v1
app.use('/', routes);

// app.use('/api/v1', routes);
// app.use(errorHandler); // Custom error handling middleware

module.exports = app;