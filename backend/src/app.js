'use strict';

require('express-async-errors');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { corsOptions } = require('./config/cors.config');
const { morganFormat } = require('./config/morgan.config');
const errorHandler = require('./middleware/errorHandler.middleware');
const notFound = require('./middleware/notFound.middleware');
const rateLimiter = require('./middleware/rateLimiter.middleware');
const requestLogger = require('./middleware/requestLogger.middleware');
const routes = require('./routes');

const app = express();

// ─── Security & Parsing ───────────────────────────────────────────────────────
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── Logging ─────────────────────────────────────────────────────────────────
app.use(morgan(morganFormat));
app.use(requestLogger);

// ─── Rate Limiting ────────────────────────────────────────────────────────────
app.use('/api', rateLimiter);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api', routes);

// ─── 404 & Error Handling ─────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
