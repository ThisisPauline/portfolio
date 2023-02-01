import database from "../database"

export const getAllProjects = (req: any, res: any) => {
  database
    .query("SELECT * FROM projects")
    .then((result: any[]) => {
      res.status(200).json(result[0]);
    })
    .catch((err: any) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

