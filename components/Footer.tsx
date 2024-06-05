import React from "react";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import social from "@/constants/Social";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-black dark:text-gray-400">
          <div className="flex flex-col items-center space-x-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li> {`© ${new Date().getFullYear()}`} </li>
              <li>{` • `}</li>
              <li>
                <Link href="/"> {social.title} </Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <a
                  href={social.linkedin}
                  rel="noreferer"
                  target="_blank"
                  aria-label="linkedIn"
                >
                  <AiFillLinkedin className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={social.spotify}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="spotify"
                >
                  <FaSpotify className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <AiFillFacebook className="sm:text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
