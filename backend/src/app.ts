import express from "express";
const projectsRouter = require("./projects/projectsRouter");

import dotenv from "dotenv";
dotenv.config();
const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

import database from "./database";


const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    
    let output = "";
    let error = false;
  
  database.getConnection().then(() => {
    output += "Database connection working well.";
      }).catch((err:any) => {
    error = true;
    console.error(err);
    output += "Database connection malfunctioning.";
      }).finally(() => {
        if(error) {
        res.status(500).send(output);
        } else {
            res.status(200).send("Welcome to our API!" + output);
              }
        });
  });

  app.use("/projects", projectsRouter);
 


app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});
