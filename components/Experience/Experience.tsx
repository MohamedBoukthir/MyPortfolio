import { experience } from "@/constants/experience";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div className="px-6 pt-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
      <div className="w-full h-px " />
      <div className="flex flex-col space-y-12 md:space-y-16">
        {experience.map((exp) => (
          <>
            <article className="flex flex-col space-y-4" key={exp.company}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-end gap-4">
                  <Image
                    src={exp.logo}
                    alt={`logo of ${exp.company}`}
                    width={40}
                    height={40}
                    className="rounded object-contain w-auto"
                  />
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {exp.company}
                  </h2>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-xs min-[500px]:text-sm">
                    {exp.position}
                  </h2>
                  <h2 className=" text-xs min-[500px]:text-sm">{exp.time}</h2>
                </div>
              </div>

              <p className=" text-sm min-[500px]:text-lg">{exp.description}</p>
              <ul className="list-disc text-xs min-[500px]:text-sm  space-y-4 px-4">
                {exp.task.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </article>
            <div className="hidden w-full h-px md:block bg-zinc-800" />
          </>
        ))}
      </div>
    </div>
  );
}
