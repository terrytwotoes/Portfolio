import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import "./exp.css";

const Experience = () => {
  return (
    <div id="Experience" className="my-20 px-50">
      <div className="text-center text-[#fcfcfc] mb-10">
        <h1 className="text-3xl font-bold  lg:text-4xl">Work Experience </h1>
        <p className=" text-xl  mt-3 text-[#fcfcfc84]">My Previous Jobs.</p>
      </div>
      <div className="mt-20 vertical-timeline-element-date">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{
              background: "#fcfcfc",
              color: "#0f0f0f",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fcfcfc" }}
            date="July 22' - May 23'"
            style={{ color: "#fcfcfc" }}
            iconStyle={{ background: "#0f0f0f", color: "#fcfcfc" }}
            icon={<MdWork />}
          >
            <h2 className="vertical-timeline-element-title font-extrabold text-xl">
              SudoHacks
            </h2>
            <h3 className="vertical-timeline-element-subtitle">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bengaluru, KA
            </h4>
            <p>
              Contributed to scaling the web application. Collaborating closely
              with UX designers,crafted UI components that adhered to WAI
              accessibility standards, ensuring an inclusive user experience.
              Embracing a mobile-first approach, optimized interfaces for
              diverse devices, enhancing the platform's usability and impact.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{
              background: "#fcfcfc",
              color: "#0f0f0f",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fcfcfc" }}
            date="July 21' - July 22'"
            style={{ color: "#fcfcfc" }}
            iconStyle={{ background: "#0f0f0f", color: "#fcfcfc" }}
            icon={<MdWork />}
          >
            <h2 className="vertical-timeline-element-title font-extrabold text-xl">
              Incedo Inc.
            </h2>
            <h3 className="vertical-timeline-element-subtitle">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gurugram, HR</h4>
            <p>
              Successfully developed a report auditing feature and played a key
              role in localizing web portals into multiple languages to meet
              diverse client requirements
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              backgroundImage: "linear-gradient(#26e3c2, #45a0f5)",
              color: "#fcfcfc",
            }}
            icon={<AiFillStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
