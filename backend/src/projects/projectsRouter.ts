const express = require("express");
const projectsRouter = express.Router();

import { getAllProjects } from "./projectsHandlers";

projectsRouter.get("/", getAllProjects);

module.exports = projectsRouter;