import { useState } from "react";

import profile from "../assets/carbon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Touseef Ahmad</h1>
            <p class="text-xl font-bold text-gray-300">
              Team Lead & React JS Developer
            </p>
            <p className="text-md font-light text-gray-400 ">
              A highly skilled and experienced ReactJS Developer and Team Lead
              with 2 and a half years of experience in React and 1 year of
              experience as a team lead. Possessing a strong technical
              background in front-end web development, with a proven ability to
              deliver high-quality, scalable, and efficient solutions.
              Demonstrated experience in leading teams, mentoring junior
              developers, and collaborating with cross-functional teams to meet
              project goals and deadlines. Committed to continuously learning
              and staying up-to-date with the latest technologies and industry
              trends, this individual is a valuable asset to any organization
              seeking a highly motivated and dedicated professional.
            </p>
          </div>
          <a href="" className="mt-2 block">
            Go to My Blog{" "}
            <FontAwesomeIcon className="ml-2" icon={faCircleArrowRight} />{" "}
          </a>

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/Touseef-ahmad"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/touseef-ahmad-cs/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
        {/*  <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" /> */}
      </div>
    </>
  );
}
