'use strict';

const { Server } = require('socket.io');
const { socketConfig } = require('../config/socket.config');
const logger = require('../utils/logger');
const connectionHandler = require('./handlers/connection.handler');

let io;

/**
 * Initializes and attaches Socket.IO to the HTTP server.
 * @param {import('http').Server} httpServer
 * @returns {import('socket.io').Server}
 */
const initializeSocket = (httpServer) => {
  io = new Server(httpServer, socketConfig);

  io.on('connection', (socket) => {
    logger.info(`Socket connected: ${socket.id}`);
    connectionHandler(io, socket);

    socket.on('disconnect', (reason) => {
      logger.info(`Socket disconnected: ${socket.id} — reason: ${reason}`);
    });
  });

  logger.info('Socket.IO initialized');
  return io;
};

/**
 * Returns the shared Socket.IO instance (after initialization).
 * @returns {import('socket.io').Server}
 */
const getSocketIO = () => {
  if (!io) throw new Error('Socket.IO has not been initialized. Call initializeSocket first.');
  return io;
};

module.exports = { initializeSocket, getSocketIO };
