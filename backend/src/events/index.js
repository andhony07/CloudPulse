'use strict';

const EventEmitter = require('events');

/**
 * Application-wide in-process event bus.
 * Use this for decoupled communication between layers
 * (e.g. service emits 'alert.created', socket handler subscribes).
 *
 * Phase 2: Import and use EVENT_NAMES constants when subscribing/emitting.
 */
const eventBus = new EventEmitter();
eventBus.setMaxListeners(50);

const EVENT_NAMES = Object.freeze({
  ALERT_CREATED: 'alert.created',
  ALERT_RESOLVED: 'alert.resolved',
  METRIC_COLLECTED: 'metric.collected',
  ANOMALY_DETECTED: 'anomaly.detected',
  INCIDENT_OPENED: 'incident.opened',
  INCIDENT_CLOSED: 'incident.closed',
});

module.exports = { eventBus, EVENT_NAMES };
