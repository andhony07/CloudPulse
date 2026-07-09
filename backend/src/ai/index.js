'use strict';

/**
 * AI layer barrel.
 * Phase 2+: Export AI-specific modules here, e.g.:
 *
 *   module.exports.AnomalyDetector   = require('./anomalyDetector');
 *   module.exports.RootCauseAnalyzer = require('./rootCauseAnalyzer');
 *   module.exports.AIClient          = require('./client');
 *
 * The AI layer owns:
 *   - LLM client configuration (model, temperature, token limits)
 *   - Prompt assembly (calls into src/prompts)
 *   - Response parsing / structured output extraction
 *   - Retry & fallback logic
 */

module.exports = {};
