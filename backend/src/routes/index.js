'use strict';

const { Router } = require('express');

const healthRouter = require('./health.routes');
// Future route modules will be registered here in Phase 2+

const router = Router();

router.use('/health', healthRouter);

// TODO: Phase 2 — mount feature routers, e.g.:
// router.use('/auth',     require('./auth.routes'));
// router.use('/users',    require('./user.routes'));
// router.use('/metrics',  require('./metrics.routes'));
// router.use('/alerts',   require('./alert.routes'));

module.exports = router;
