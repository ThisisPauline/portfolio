import database from "../database"

export const getAllProjects = (req: any, res: any) => {
  database
    .query("SELECT * FROM projectSpecs")
    .then((result: any[]) => {
      res.status(200).json(result[0]);
    })
    .catch((err: any) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

export const getProjectByID = (req:any, res:any) => {
  const projectID = req.params.id;
  database
  .query("  SELECT * FROM photos INNER JOIN projectSpecs on projectSpecs.id = photos.`projectSpecs_id` WHERE projectSpecs.id = ?", [projectID])
  .then((result) => {
  if ((result[0] as any).length === 0) {
  res.status(404).send("This movie is not in the list.");
  } else {
  res.status(200).json(result[0]);
  }
  })
  .catch((err) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
  });
  };

