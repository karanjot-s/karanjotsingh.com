import projectList from "../../public/projects.json";

export default function projects(req, res) {
  res.status(200).json(projectList);
}
