import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import Stacks from "@/components/stack/Stacks";


export default function Home() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro/>
      <Stacks/>
    </ScrollProvider>
  );
}
