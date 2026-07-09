'use strict';

const { NODE_ENV } = require('./env.config');

const allowedOrigins =
  NODE_ENV === 'production'
    ? (process.env.ALLOWED_ORIGINS || '').split(',').map((o) => o.trim())
    : ['http://localhost:3000', 'http://localhost:5173'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin ${origin} is not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
};

module.exports = { corsOptions };
