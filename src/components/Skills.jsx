import { skills } from "../data/Data";

function Skills() {
  return (
    <div className="mb-20 flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 text-[#fcfcfc84] ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
        <img
          className="absolute sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/coding.svg"
        />
        <img
          className="absolute sqD top-[-15px] right-[-15px]"
          src="/fillStar.svg"
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center text-[#fcfcfc]"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
