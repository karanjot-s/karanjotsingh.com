import Cors from "cors";

// intialize cors to allow cross-origin requests
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*",
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

export default async function home(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  res.status(200).json({ "/hello": "Hello, World!" });
}
