const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        res.end("index page, 인덱스");
    }
});

app.listen(3001, () => {
    console.log("http server is open");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     //기능
//     res.send("Hello!");
// });
// app.listen(3000, () => {
//     console.log("server is open");
// });
