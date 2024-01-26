import Contact from '@/components/Contact';
import MainLayout from '@/components/layouts/MainLayout';


export const metadata = {
    title: 'Contact - Mohamed Boukthir',
    description: 'Contact me- Mohamed Boukthir',
  };

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <p className="text-lg leading-7 !mt-12 text-gray-500 dark:text-gray-400">
         Let's Connect! Get in touch with me through the contact form below. Whether you have a project in mind,
         want to discuss potential collaborations, or just want to say hello, I'm all ears. Your messages are the 
         keystrokes that keep my coding journey exciting. Looking forward to hearing from you soon!
        </p>
      </div>
      <Contact/>
    </MainLayout>
  )
}
