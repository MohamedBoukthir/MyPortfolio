"use client";

import React from "react";
import NavLinks from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import classNames from "classnames";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10 sticky">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames("hidden text-3xl font-extrabold sm:block", {
                "": pathName === "/",
              })}
              aria-label="Logo"
            >
              MB.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {NavLinks.map(({ title, href }) => {
                const isActive = pathName?.includes(href);
                return (
                  <Link
                    key={title}
                    href={href}
                    className={classNames("horizontal-underline text-base", {
                      "horizontal-underline-active": isActive,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
