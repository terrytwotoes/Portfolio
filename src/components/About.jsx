import Skills from "./Skills";

const About = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center text-[#fcfcfc] md:px-10 lg:px-20">
      <div>
        <h1 className="text-3xl text-center font-bold  lg:text-4xl mb-10">
          About Me
        </h1>
        <p className=" text-xl text-justify mt-3 text-[#fcfcfc84]">
          I hail from silicon valley of India, Bengaluru. My expertise primarily
          lies in front-end development, where I excel in crafting user
          interfaces and architecting browser-based applications using JS/TS.
          Over time, I've honed my skills across a spectrum of tasks, spanning
          from establishing UI component libraries using contemporary JS
          frameworks, to addressing memory leaks, identifying security
          vulnerabilities, and enhancing enterprise applications for optimal
          performance, seamless user experience, and adherence to web vitals.
        </p>
      </div>
      <div className="mt-20">
        <Skills />
      </div>
    </div>
  );
};

export default About;
