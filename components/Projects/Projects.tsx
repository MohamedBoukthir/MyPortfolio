import Link from "next/link";
import Card from "../Card";
import { projects } from "@/constants/projects";
import { BsEye } from "react-icons/bs";
import Article from "@/app/projects/Article";

export default function Projects() {
  return (
    <div className="relative pb-16">
      <div className="mt-5 mb-12 w-full h-px bg-zinc-800" />
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        <Card>
          <Link href={`/projects/${projects[0].slug}`}>
            <article className="relative w-full h-full p-2 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <span className="w-full flex justify-end items-center gap-1 text-xs ">
                  <BsEye className="w-4 h-4" />{" "}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold group-hover:text-white sm:text-4xl font-display">
                {projects[0].title}
              </h2>
              <p className="mt-4 leading-8 duration-150 group-hover:text-white">
                {projects[0].brief}
              </p>
            </article>
          </Link>
        </Card>
        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
          {projects.slice(1, 3).map((project) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-7 mb-7 w-full h-px bg-zinc-800" />

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 ">
        {projects.slice(3).map((project) => (
          <div key={project.slug} className="grid grid-cols-1 gap-4 ">
            <Card>
              <Article project={project} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
