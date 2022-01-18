import projectList from "../../public/projects.json";

export default function projects(req, res) {
  const projects = projectList.filter((proj) => proj.top === true);
  res.status(200).json(projects);
}
