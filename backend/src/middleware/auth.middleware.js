'use strict';

/**
 * Authentication middleware (placeholder).
 * Will verify JWT tokens in Phase 2.
 */
const authenticate = (req, res, next) => {
  // TODO: Phase 2 — extract and verify JWT from Authorization header
  next();
};

/**
 * Role-based authorization middleware factory (placeholder).
 * @param {...string} roles - Allowed roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    // TODO: Phase 2 — check req.user.role against allowed roles
    next();
  };
};

module.exports = { authenticate, authorize };
