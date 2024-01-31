import Projects from "@/components/Projects/Projects";
import SectionContainer from "@/components/SectionContainer";

export const metadata = {
  title: "Projects - Mohamed Boukthir",
  description: "My projects - Mohamed Boukthir",
};

export default function page() {
  return (
    <SectionContainer>
      <div className="space-y-2 pt-2 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          My Projcts
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Here are some of my most important and recent projects that I have
          been working on.
        </p>
      </div>
      <Projects />
    </SectionContainer>
  );
}
