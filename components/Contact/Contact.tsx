import Link from "next/link";
import React from "react";
import Card from "../Card";
import social from "@/constants/Social";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import SectionContainer from "../SectionContainer";

export default function Contact() {
  return (
    <SectionContainer>
      <div className="pb-16 flex items-center justify-center mt-8 px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-6 mb-6 lg:mb-10 sm:grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <Card>
            <Link
              href={social.github}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                <FaGithub />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl sm:text-md font-medium duration-150 lg:text-xl xl:text-2xl text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  MohamedBoukthir
                </span>
                <span className="mt-4 text-sm text-center duration-1000  text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  Github
                </span>
              </div>
            </Link>
          </Card>
          <Card>
            <Link
              href={social.linkedin}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                <AiFillLinkedin />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl sm:text-md font-medium duration-150 lg:text-xl xl:text-2xl  text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  MohamedBoukthir
                </span>
                <span className="mt-4 text-sm text-center duration-1000  text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  LinkedIn
                </span>
              </div>
            </Link>
          </Card>
          <Card>
            <Link
              href={social.email}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                <MdAlternateEmail />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl sm:text-md font-medium duration-150 lg:text-xl xl:text-2xl text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  Medboukthir7@gmail.com
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-black group-hover:text-black font-display dark:text-zinc-200 dark:group-hover:text-white font-display">
                  E-mail
                </span>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
