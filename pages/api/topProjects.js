// imports
import Cors from "cors";

// file imports
import runMiddleware from "../../utils/middleware";
import projectList from "../../public/projects.json";

// intialize cors to allow cross-origin requests
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*",
});

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const projects = projectList.filter((proj) => proj.top === true);
  res.status(200).json(projects);
}
