'use strict';

const { NODE_ENV } = require('./env.config');

const morganFormat = NODE_ENV === 'production' ? 'combined' : 'dev';

module.exports = { morganFormat };
