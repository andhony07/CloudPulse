'use strict';

const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { LOG_LEVEL, NODE_ENV } = require('../config/env.config');

const { combine, timestamp, errors, json, colorize, printf } = format;

const devFormat = combine(
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  errors({ stack: true }),
  printf(({ level, message, timestamp, stack, ...meta }) => {
    const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return `${timestamp} [${level}]: ${stack || message}${metaStr}`;
  }),
);

const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json(),
);

const logger = createLogger({
  level: LOG_LEVEL,
  format: NODE_ENV === 'production' ? prodFormat : devFormat,
  transports: [
    new transports.Console(),
    ...(NODE_ENV === 'production'
      ? [
          new transports.DailyRotateFile({
            filename: 'logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            maxFiles: '14d',
          }),
          new transports.DailyRotateFile({
            filename: 'logs/combined-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d',
          }),
        ]
      : []),
  ],
  exitOnError: false,
});

module.exports = logger;
