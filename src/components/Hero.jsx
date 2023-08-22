import deved from "/dev-ed-wave.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-center relative z-0">
      <div>
        <h2 className="text-5xl py-2   font-extrabold  md:text-6xl text-[#fcfcfc]">
          Chaitanya Tripathi
        </h2>
        <h3 className="text-4xl py-2  font-extrabold bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] bg-clip-text text-transparent  md:text-3xl text-[#fcfcfc]">
          <Typewriter
            options={{
              strings: [
                "UI/UX Developer.",
                "Software Engineer.",
                "Freelancer.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="text-md py-6 leading-8 text-[#fcfcfc84]  max-w-xl mx-auto md:text-xl">
          Translating visions into reality with web craftsmanship.
        </p>
      </div>
      <div className="mx-auto bg-gradient-to-b from-[#26e3c2] to-[#45a0f5] rounded-full w-80 h-80 relative overflow-hidden  md:h-70 md:w-70">
        <img src={deved} className="object-cover relative top-[80px]" />
      </div>
    </div>
  );
};

export default Hero;
