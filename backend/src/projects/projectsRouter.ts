const express = require("express");
const projectsRouter = express.Router();


import { getAllProjects } from "./projectsHandlers";
import {getProjectByID} from "./projectsHandlers"



projectsRouter.get("/", getAllProjects);
projectsRouter.get("/:id", getProjectByID);


module.exports = projectsRouter;