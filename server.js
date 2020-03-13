const express = require("express");
const projectRouter = require("./data/api/projectRouter.js");
const actionRouter = require("./data/api/actionRouter.js");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Server is responding!</h2>`);
})



module.exports = server;