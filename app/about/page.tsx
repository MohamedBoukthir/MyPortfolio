import About from "@/components/About/About";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export const metadata = {
  title: "About - Mohamed Boukthir",
  description: "About me - Mohamed Boukthir",
};

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-2 md:space-y-5">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Who Am I ?
        </h1>
      </div>
      <About />
    </MainLayout>
  );
}
