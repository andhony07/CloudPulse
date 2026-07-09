'use strict';

const { corsOptions } = require('./cors.config');

const socketConfig = {
  cors: corsOptions,
  transports: ['websocket', 'polling'],
  pingTimeout: 60000,
  pingInterval: 25000,
};

module.exports = { socketConfig };
