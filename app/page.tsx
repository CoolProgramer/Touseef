import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ProfilePic from "../public/profile-pic.png";
import CoverPhoto from "../public/cover-image.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col min-w-full items-center min-h-screen">
        {/* Cover Photo */}

        <Image
          src={CoverPhoto}
          alt="Cover Photo"
          className="relative w-full h-64 object-cover min-w-full"
        />

        {/* Profile Photo */}
        <Image
          src={ProfilePic}
          alt="Profile Photo"
          className="absolute top-10 w-72 h-72 rounded-full mt-4 border-gray-300 border-4"
        />

        <div className="pb-32"></div>
        <h1 className="text-3xl">
          <span className="font-light">Touseef</span>{" "}
          <span className="font-bold">Ahmad updated</span>
        </h1>

        {/* Description */}
        <p className="text-lg mt-4 max-w-md">
          Welcome to my portfolio website! I'm a React developer with 3 years of
          experience, specializing in React, TypeScript, and Redux. I have a
          strong foundation in building scalable web applications and leveraging
          the latest frontend technologies. Take a look at my work and feel free
          to reach out for collaboration opportunities. Let's build something
          great together!
        </p>

        {/* Social Profiles */}
        <div className="flex mt-4 space-x-4">
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" /> Github
          </a>
          <a
            href="https://twitter.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> Linkedin
          </a>
        </div>
      </div>
    </main>
  );
}
