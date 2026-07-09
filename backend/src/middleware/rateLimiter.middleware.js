'use strict';

const rateLimit = require('express-rate-limit');
const { StatusCodes } = require('http-status-codes');
const { RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX } = require('../config/env.config');

const rateLimiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
  statusCode: StatusCodes.TOO_MANY_REQUESTS,
});

module.exports = rateLimiter;
