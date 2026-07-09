'use strict';

/**
 * Background job scheduler registry.
 * Phase 2+: Register scheduled jobs here, e.g.:
 *
 *   const cron = require('node-cron');
 *
 *   const initializeJobs = () => {
 *     cron.schedule('* * * * *', require('./metricCollector.job'));
 *     cron.schedule('0 * * * *', require('./alertEvaluator.job'));
 *     cron.schedule('0 0 * * *', require('./reportGenerator.job'));
 *   };
 *
 *   module.exports = { initializeJobs };
 */

const initializeJobs = () => {
  // No-op until Phase 2
};

module.exports = { initializeJobs };
