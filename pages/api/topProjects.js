import projectList from "../../public/projects.json";
import Cors from "cors";

// intialize cors to allow cross-origin requests
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "https://karanjotsingh.com",
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function projects(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const projects = projectList.filter((proj) => proj.top === true);
  res.status(200).json(projects);
}
