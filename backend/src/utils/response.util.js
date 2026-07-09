'use strict';

/**
 * Standardised JSON response helpers.
 */

const success = (res, data = null, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const created = (res, data = null, message = 'Created') => {
  return success(res, data, message, 201);
};

const paginated = (res, items, total, page, limit, message = 'Success') => {
  return res.status(200).json({
    success: true,
    message,
    data: items,
    meta: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  });
};

module.exports = { success, created, paginated };
