import MainLayout from '@/components/layouts/MainLayout';
import React from 'react'

export const metadata = {
    title: 'Experience - Mohamed Boukthir',
    description: 'My experience - Mohamed Boukthir',
  };

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          My Experience
        </h1>
        <p className="text-lg leading-7 !mt-12 text-gray-500 dark:text-gray-400">
          
        </p>
      </div>
    </MainLayout>
  )
}
