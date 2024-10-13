// 1. Import http
// 2. Create Service
// 3. Make it listen @specific Port

const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome, User");
})

app.get("/register", (req, res) => {
    const query = req.query;
    res.send(req.query.name+ "Welcome, Usersss");
})

const myServer = http.createServer(app);

myServer.listen(4000, () => {
    console.log("Server is started now..");
})