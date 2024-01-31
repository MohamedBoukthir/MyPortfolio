import Contact from "@/components/Contact/Contact";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Contact - Mohamed Boukthir",
  description: "Contact me- Mohamed Boukthir",
};

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-2 pb-8 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Let&apos;s Connect! Get in touch with me through the contact form below.
          Whether you have a project in mind, want to discuss potential
          collaborations, or just want to say hello, I&apos;m all ears. Your messages
          are the keystrokes that keep my coding journey exciting. Looking
          forward to hearing from you soon!
        </p>
      </div>
      <div className="mt-5 w-full h-px bg-zinc-800" />
      <Contact />
    </MainLayout>
  );
}
