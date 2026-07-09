'use strict';

const { StatusCodes } = require('http-status-codes');
const logger = require('../utils/logger');
const { NODE_ENV } = require('../config/env.config');

/**
 * Global error-handling middleware.
 * Must be registered LAST (after all routes).
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  logger.error({
    message,
    statusCode,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  const body = {
    success: false,
    message,
    ...(NODE_ENV !== 'production' && { stack: err.stack }),
  };

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      ...body,
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    return res.status(StatusCodes.CONFLICT).json({
      ...body,
      message: 'Duplicate field value',
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      ...body,
      message: 'Invalid or expired token',
    });
  }

  return res.status(statusCode).json(body);
};

module.exports = errorHandler;
