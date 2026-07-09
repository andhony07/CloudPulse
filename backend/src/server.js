'use strict';

require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectDatabase } = require('./database/connection');
const { initializeSocket, getSocketIO } = require('./sockets');
const logger = require('./utils/logger');
const { PORT, NODE_ENV } = require('./config/env.config');

const server = http.createServer(app);

// ─── Socket.IO ────────────────────────────────────────────────────────────────
initializeSocket(server);

// ─── Graceful Shutdown ────────────────────────────────────────────────────────
const shutdown = async (signal) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);

  // 1. Stop accepting new HTTP connections
  server.close(async () => {
    logger.info('HTTP server closed.');

    try {
      // 2. Close all active Socket.IO connections
      const io = getSocketIO();
      await new Promise((resolve) => io.close(resolve));
      logger.info('Socket.IO server closed.');
    } catch (_) {
      // io may not have been initialised if startup failed
    }

    // 3. Close MongoDB connection
    const mongoose = require('mongoose');
    await mongoose.connection.close();
    logger.info('MongoDB connection closed.');

    process.exit(0);
  });

  // Force exit after 10 s if graceful shutdown stalls
  setTimeout(() => {
    logger.error('Graceful shutdown timed out — forcing exit.');
    process.exit(1);
  }, 10_000).unref();
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', reason);
  shutdown('unhandledRejection');
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  shutdown('uncaughtException');
});

// ─── Startup ──────────────────────────────────────────────────────────────────
const start = async () => {
  await connectDatabase();
  server.listen(PORT, () => {
    logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
  });
};

start();
