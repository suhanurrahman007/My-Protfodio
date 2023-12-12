const Project = ({ project }) => {
    console.log(project.img);
  const { name, description, technology, githubLink, liveLink, img } = project;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-[#0D0D21] card-compact shadow-xl rounded-lg"
    >
      <figure>
        <img src={img} alt="project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xs text-gray-400 text-justify">{description}</p>
        <p className="flex flex-wrap gap-3 ">
          <span className="text-xl font-bold">Technology:</span>
          {technology?.map((item, index) => (
            <p
              className="shadow-lg bg-[#150F2D] px-4 text-center h-9 py-2 rounded-md text-xs font-semibold"
              key={index}
            >
              {item}
            </p>
          ))}
        </p>
        <div className="card-actions mt-3">
          <a
            href={githubLink}
            className="text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            className="text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
