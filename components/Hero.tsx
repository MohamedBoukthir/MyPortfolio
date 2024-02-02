"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { ScrollContext } from "./Providers/ScrollProvider";
import { renderCanvas } from "./renderCanvas";

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Mohamed Boukthir, I&apos;m a software developer, I really like
        making computer programs and finding smart ways to solve problems.
      </h1>
      <div className="flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-80px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-10 md:-mt-20">
            <div ref={ref} className="flex flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-5xl md:text-6xl xl:text-[4rem]">
                Mohamed Boukthir
              </h1>
              <h2 className="text-3xl font-medium opacity-80 sm:text-5xl md:text-5xl xl:text-5xl xl:leading-[3.5rem] text-justify ">
                Software developer, I love learning about new tech and using it to make good
                software.
              </h2>
              <Link
                href="/about"
                className="!mt-4 horizontal-underline text-md w-max mb-9 cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me &rarr;
              </Link>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector("#intro");

                  intro?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HiOutlineArrowNarrowDown size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
}
