import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import Technologies from "@/components/Technologies";


export default function Home() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro/>
      <Technologies/>
    </ScrollProvider>
  );
}
