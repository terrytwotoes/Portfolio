import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";

function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col text-left justify-between pb-10 relative mb-10 "
    >
      <div id="learnmore" className="divide-y-8">
        <SectionTitle title="Hand-picked projects for you to see." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        <ProjectCard />
      </div>
      <div className="relative w-full mt-2"></div>
    </div>
  );
}

export default Projects;
