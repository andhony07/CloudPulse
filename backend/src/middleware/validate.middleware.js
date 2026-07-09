'use strict';

const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

/**
 * Reads express-validator errors from the request and short-circuits
 * with a 422 response if any are found.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }
  next();
};

module.exports = validate;
