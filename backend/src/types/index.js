'use strict';

/**
 * Shared JSDoc type definitions used across the application.
 *
 * @typedef {import('express').Request}  ExpressRequest
 * @typedef {import('express').Response} ExpressResponse
 * @typedef {import('express').NextFunction} NextFunction
 *
 * @typedef {Object} AuthenticatedRequest
 * @property {import('../interfaces').UserPayload} user - Authenticated user payload (attached by auth middleware)
 *
 * @typedef {Object} UserPayload
 * @property {string} id    - MongoDB ObjectId string
 * @property {string} email
 * @property {string} role
 */

module.exports = {};
