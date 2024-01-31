"use client";

import GitHubCalendar from 'react-github-calendar';
import SectionContainer from './SectionContainer';

export default function GithubContribution
() {
  return (
    <SectionContainer>
        <div className='flex justify-center items-center mt-10 w-full'>
          <GitHubCalendar username="MohamedBoukthir" fontSize={17} blockRadius={2} year={new Date().getFullYear()}/>
        </div>
    </SectionContainer>
  )
}
