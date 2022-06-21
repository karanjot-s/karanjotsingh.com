// imports
import Cors from "cors";

// file imports
import runMiddleware from "../../utils/middleware";

// intialize cors to allow cross-origin requests
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*",
});

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  res.status(200).json({ "/hello": "Hello, World!" });
}