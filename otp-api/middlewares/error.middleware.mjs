export const errorHandler = (error, request, response, next) => {
    return response.status(error.statusCode || 500).send({ 
        message: error.message || "Internal server error",
        path: request.url,
        method: request.method,
        stack: error.stack
     });
}