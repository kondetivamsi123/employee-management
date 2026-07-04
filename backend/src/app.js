const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Employee Management Backend Server is running");
    res.end();
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});