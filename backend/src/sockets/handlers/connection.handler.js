'use strict';

/**
 * Connection handler — called for every new socket connection.
 * Phase 2: Register domain-specific event handlers here.
 *
 * @param {import('socket.io').Server} io
 * @param {import('socket.io').Socket} socket
 */
const connectionHandler = (io, socket) => {
  // TODO: Phase 2 — register event handlers, e.g.:
  // require('./metrics.handler')(io, socket);
  // require('./alerts.handler')(io, socket);
  // require('./logs.handler')(io, socket);
};

module.exports = connectionHandler;
