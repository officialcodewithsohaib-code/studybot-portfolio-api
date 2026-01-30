/**
 * Standard success response format
 */
const successResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: 'success',
    data: data,
    timestamp: new Date().toISOString()
  });
};

/**
 * Standard error response format
 */
const errorResponse = (res, message, statusCode = 500, errors = null) => {
  const response = {
    status: 'error',
    message: message,
    timestamp: new Date().toISOString()
  };

  if (errors && process.env.NODE_ENV === 'development') {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

module.exports = {
  successResponse,
  errorResponse
};
