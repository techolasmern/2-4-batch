export const requestLogger = (request, response, next) => {
    const requestedPath = request.url;
    const requestedMethod = request.method;
    const startTime = Date.now();
    response.on("finish", () => {
        const endTime = Date.now();
        const diff = endTime - startTime;
        const statusCode = response.statusCode;
        console.log(`${requestedMethod} ${requestedPath} ${statusCode} -${diff}ms`);
    });
    next();
}