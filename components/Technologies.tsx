"use client";

import React, { useContext, useEffect, useRef } from 'react'
import { renderCanvas } from './renderCanvas';
import { ScrollContext } from './Providers/ScrollProvider';

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
        <div>
           
        </div>
  )
}
