// imports
import Cors from "cors";

// file imports
import runMiddleware from "../../../utils/middleware";
import { addData } from "../../../utils/firebase/crud";

// intialize cors to allow cross-origin requests
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*",
});

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const data = {
    name: "testData",
    data: "This is a test data",
    age: 200,
  };

  const result = await addData("blogs", data);

  res.status(200).json(result);
}
