'use strict';

/**
 * Custom application error with an HTTP status code.
 * Throw this instead of a generic Error to control response status.
 */
class AppError extends Error {
  /**
   * @param {string} message - Human-readable error message
   * @param {number} statusCode - HTTP status code (default 500)
   */
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Distinguishes expected errors from programmer mistakes
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
