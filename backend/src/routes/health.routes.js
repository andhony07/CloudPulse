'use strict';

const { Router } = require('express');
const HealthController = require('../controllers/health.controller');

const router = Router();

/**
 * GET /api/health
 * Liveness probe — delegates to HealthController (route → controller pattern).
 */
router.get('/', HealthController.check);

module.exports = router;
