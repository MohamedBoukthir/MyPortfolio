import Projects from '@/components/Projects/Projects';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react'

export const metadata = {
    title: 'Projects - Mohamed Boukthir',
    description: 'My Projects - Mohamed Boukthir',
  };

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 !mt-12 text-gray-500 dark:text-gray-400">
        Dive into a world of awesome projects that I've handpicked to showcase my skills and creativity.
        These are not just lines of code; they're my passion brought to life! Join me on this journey where every project is a glimpse into my coding adventure.
        Let's make tech simple, exciting, and seriously cool
        </p>
      </div>
      <Projects/>
    </MainLayout>
  )
}
