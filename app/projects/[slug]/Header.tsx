"use client";

import { Project } from "@/Interface/projects";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  project: Project;
};

export const Header: React.FC<Props> = ({ project }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: project.repository,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="z-40 bg-transparent py-5 md:py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/projects" className="ml-1 mr-1 h-8 w-8 rounded p-1">
          <BsArrowLeft className="w-6 h-6 " />
        </Link>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8">{project.brief}</p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link
                  target="_blank"
                  key={link.label}
                  href={link.href}
                  className="horizontal-underline"
                >
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
