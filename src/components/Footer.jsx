import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="pt-4 border-t-[0.5px] border-[#fcfcfc84] text-[#fcfcfc] gap-3 flex flex-col ">
        <div className="flex gap-8 mb-3 justify-center ">
          <a href="https://github.com/terrytwotoes" target="_blank">
            <BsGithub className="cursor-pointer w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/chaitanya-tripathi-5737b3165"
            target="_blank"
          >
            <BsLinkedin className="cursor-pointer   w-6 h-6" />
          </a>
          <a href="mailto:chaitanyatripathi11@gmail.com">
            <AiFillMail className="cursor-pointer w-6 h-6" />
          </a>
        </div>
        <div className="mb-2 flex justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest ">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>

              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
            &nbsp;
            <p>BY</p>
            &nbsp;
            <a href="mailto:chaitanyatripathi11@gmail.com">
              Chaitanya Tripathi
            </a>
          </div>
        </div>

        <div className=" text-xs flex justify-center ">
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
