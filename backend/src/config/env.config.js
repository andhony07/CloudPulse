'use strict';

const PORT = parseInt(process.env.PORT || '5000', 10);
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

// ─── MongoDB ──────────────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI && isProduction) {
  throw new Error('Missing required env var: MONGO_URI — must be set in production');
}

// ─── JWT ──────────────────────────────────────────────────────────────────────
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

if (isProduction && (!JWT_SECRET || !JWT_REFRESH_SECRET)) {
  throw new Error('Missing required env vars: JWT_SECRET and JWT_REFRESH_SECRET must be set in production');
}

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10); // 15 min
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '100', 10);

// ─── Logging ──────────────────────────────────────────────────────────────────
const LOG_LEVEL = process.env.LOG_LEVEL || (isProduction ? 'info' : 'debug');

module.exports = {
  PORT,
  NODE_ENV,
  isProduction,
  isTest,
  MONGO_URI: MONGO_URI || 'mongodb://localhost:27017/devops_monitoring',
  JWT_SECRET: JWT_SECRET || (isTest ? 'test_secret' : undefined),
  JWT_EXPIRES_IN,
  JWT_REFRESH_SECRET: JWT_REFRESH_SECRET || (isTest ? 'test_refresh_secret' : undefined),
  JWT_REFRESH_EXPIRES_IN,
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX,
  LOG_LEVEL,
};
