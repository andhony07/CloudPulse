'use strict';

const ENVIRONMENTS = Object.freeze({
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
  TEST: 'test',
});

const HTTP_METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
});

const SORT_ORDER = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
});

const PAGINATION = Object.freeze({
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
});

const TOKEN_TYPES = Object.freeze({
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'reset_password',
});

const ROLES = Object.freeze({
  ADMIN: 'admin',
  OPERATOR: 'operator',
  VIEWER: 'viewer',
});

const ALERT_SEVERITY = Object.freeze({
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
  INFO: 'info',
});

const METRIC_TYPES = Object.freeze({
  CPU: 'cpu',
  MEMORY: 'memory',
  DISK: 'disk',
  NETWORK: 'network',
  LATENCY: 'latency',
  ERROR_RATE: 'error_rate',
  THROUGHPUT: 'throughput',
});

const SOCKET_EVENTS = Object.freeze({
  // Connection
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  // Metrics
  METRIC_UPDATE: 'metric:update',
  METRIC_SUBSCRIBE: 'metric:subscribe',
  METRIC_UNSUBSCRIBE: 'metric:unsubscribe',
  // Alerts
  ALERT_NEW: 'alert:new',
  ALERT_RESOLVED: 'alert:resolved',
  // Logs
  LOG_STREAM: 'log:stream',
});

module.exports = {
  ENVIRONMENTS,
  HTTP_METHODS,
  SORT_ORDER,
  PAGINATION,
  TOKEN_TYPES,
  ROLES,
  ALERT_SEVERITY,
  METRIC_TYPES,
  SOCKET_EVENTS,
};
