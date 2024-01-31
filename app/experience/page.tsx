import Experience from "@/components/Experience/Experience";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Experience - Mohamed Boukthir",
  description: "My experience - Mohamed Boukthir",
};

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-2 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          My Experience
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Check out my work experience below. If you have any projects or ideas
          to discuss, I&apos;m all ears! Your messages make my work journey exciting.
          Feel free to reach out to talk about anything – past projects,
          possible teamwork, or just to say hi. Looking forward to hearing from
          you soon
        </p>
      </div>
      <Experience />
    </MainLayout>
  );
}
