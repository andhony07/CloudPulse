'use strict';

const { StatusCodes } = require('http-status-codes');

/**
 * Health controller — demonstrates the route → controller → service layer chain.
 * The service/repository layers are stubs at Phase 1; they will be wired in Phase 2.
 */
const HealthController = {
  /**
   * GET /api/health
   * Basic liveness probe.
   */
  check: (req, res) => {
    // TODO: Phase 2 — delegate to HealthService.getStatus() which checks
    //                 the DB connection, memory, and external dependencies.
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'OK',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    });
  },
};

module.exports = HealthController;
