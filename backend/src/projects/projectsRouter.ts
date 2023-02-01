const express = require("express");
const projectsHandlers = express.Router();
const projectsRouter = express.Router();

projectsRouter.get("/", projectsHandlers.getAllProjects);

module.exports = projectsRouter;