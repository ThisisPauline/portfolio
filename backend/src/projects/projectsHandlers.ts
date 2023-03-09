import database from "../database"

export const getAllProjects = (req: any, res: any) => {
  database
    .execute("SELECT * FROM projectSpecs INNER JOIN photos on projectSpecs.id = photos.`projectSpecs_id` where photos.name LIKE ?", ['%ONE'])
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
  .execute("SELECT * FROM photos INNER JOIN projectSpecs on projectSpecs.id = photos.`projectSpecs_id` WHERE projectSpecs.id = ?", [projectID])
  .then((result) => {
    if ((result[0] as any).length === 0) {
      res.status(404).send("Nope");
    } else {
      res.status(200).json(result[0]);
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
};

