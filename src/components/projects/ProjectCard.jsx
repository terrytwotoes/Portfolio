import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    id: 0,
    title: "Genie",
    desc: "An all-inclusive AI-driven SaaS platform with AI-generated code, music, video, and image capabilities, complemented by an advanced AI language model.",
    img: "/project3.png",
    link: "https://ai-saas-platform-pied.vercel.app/",
    github: "https://github.com/terrytwotoes/ai-saas",
    tags: ["NextJS", "TailwindCSS", "Stripe", "Clerk", "Shadcn-ui"],
  },
  {
    id: 1,
    title: "Krypt",
    desc: " A full-fledged decentralised Web 3.0 application on the blockchain.",
    img: "/project1.png",
    link: "https://splendid-snickerdoodle-34c11b.netlify.app/",
    github: "https://github.com/terrytwotoes/web-3.0-kryptic-app",
    tags: ["React", "Solidity", "Ethereum", "MetaMask"],
  },
  {
    id: 2,
    title: "NPM Package",
    desc: "An advance dropdown with multi-select capabilities.",
    img: "/project5.png",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "Vite", "TypeScipt", "CSS Module"],
  },
  {
    id: 3,
    title: "Space Invader",
    desc: "A fun game with increasing levels of difficulty.",
    img: "/project6.png",
    github: "https://github.com/terrytwotoes/Space_invader",
    tags: ["Python", "PyGame"],
  },
];

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center text-[#fcfcfc]"
          key={project.id}
        >
          <img src={AiFillGithub} alt="" />
          <div
            className={`w-full relative rounded-xl border-fun-gray border bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] p-2 transition hover:-translate-y-2 hover:opacity-75 `}
          >
            <a href={project.link || project.github} target="_blank">
              <img className="w-full rounded-md" src={project.img} />
            </a>
          </div>
          <div className="w-full mt-5">
            <div className="flex justify-between items-center">
              <a href={project.link || project.github}>
                <h3 className="text-lg font-bold ">{project.title}</h3>
              </a>
              <div className="space-x-2 flex">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <AiFillGithub className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-[#fcfcfc84] text-left text-sm">{project.desc}</p>
            <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none ">
              {project.tags.map((tag) => {
                return (
                  <li key={tag}>
                    <div className="m-1 rounded-lg text-sm bg-[#fcfcfc] text-black font-medium py-1 px-2 ">
                      {tag}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
