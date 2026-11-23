const DEFAULT_ERROR_MESSAGE = "Internal server error";
const DEFAULT_ERROR_CODE = 500;

export const createError = (message = DEFAULT_ERROR_MESSAGE, code = DEFAULT_ERROR_CODE) => {
    const error = new Error(message);
    error.statusCode = code;
    return error;
}