import About from '@/components/About/About';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react'

export const metadata = {
    title: 'About - Mohamed Boukthir',
    description: 'About me - Mohamed Boukthir',
  };

export default function page() {
  return (
    <MainLayout>
      <About/>
    </MainLayout>
  )
}
