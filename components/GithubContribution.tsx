"use client";

import React, { useContext, useEffect, useRef } from 'react'
import { renderCanvas } from './renderCanvas';
import { ScrollContext } from './Providers/ScrollProvider';
import SectionContainer from './SectionContainer';
import GitHubCalendar from 'react-github-calendar';

export default function 
() {
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
    <SectionContainer>
        <div className='flex justify-center items-center mt-10 w-full'>
          <GitHubCalendar username="MohamedBoukthir" fontSize={17} blockRadius={2} year={new Date().getFullYear()}/>
        </div>
    </SectionContainer>
  )
}
