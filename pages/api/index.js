export default function home(req, res) {
  res.status(200).json({ "/hello": "Hello, World!" });
}
