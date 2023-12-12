import { useLoaderData } from "react-router-dom";
import Project from "./Project";
import Container from "../../components/Container";
import { Helmet } from "react-helmet";

const Projects = () => {
    const projects = useLoaderData()
    // console.log(projects);
    return (
      <Container>
        <Helmet>
          <title>SuHan - Projects</title>
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects?.map((project) => (
            <Project key={project?._id} project={project}></Project>
          ))}
        </div>
      </Container>
    );
};

export default Projects;