const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer();

server.on("request", (request, response) => {
    const path = request.url;
    const { pathname, query } = url.parse(path, true);

    const paths = ["/", "/about"];
    if(paths.includes(pathname)) {
        const totalVisit = fs.readFileSync("./visited.txt", { encoding: "utf-8" });
        fs.writeFileSync("./visited.txt", String(Number(totalVisit || 0) + 1));
    }

    if (pathname == "/") {
        const html = fs.readFileSync("./html/home.html", { encoding: "utf-8" });
        response.writeHead(200, { "Content-Type": "text/html" });
        return response.end(html);
    }

    if (pathname == "/about") {
        const html = fs.readFileSync("./html/about.html", { encoding: "utf-8" });
        response.writeHead(200, { "Content-Type": "text/html" });
        return response.end(html);
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})