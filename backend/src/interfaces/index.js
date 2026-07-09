'use strict';

/**
 * Interface definitions (JSDoc typedefs / abstract base classes).
 *
 * JavaScript has no native interface construct, so we use:
 *   a) JSDoc @typedef for editor support
 *   b) Abstract base classes that throw on unimplemented methods
 *
 * Phase 2+: Add interface/base classes here, e.g.:
 *
 *   module.exports.BaseRepository = require('./BaseRepository');
 *   module.exports.BaseService    = require('./BaseService');
 *
 * @module interfaces
 */

/**
 * @typedef {Object} PaginationOptions
 * @property {number} page   - Current page (1-based)
 * @property {number} limit  - Items per page
 * @property {string} [sort] - Sort field
 * @property {'asc'|'desc'} [order] - Sort order
 */

/**
 * @typedef {Object} PaginatedResult
 * @property {Array}  items      - Page of items
 * @property {number} total      - Total item count
 * @property {number} page       - Current page
 * @property {number} limit      - Items per page
 * @property {number} totalPages - Total page count
 */

module.exports = {};
