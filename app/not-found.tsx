import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO: Comment out when https://github.com/vercel/next.js/issues/50566 is fixed.

export const metadata = {
  title: "404 - Mohamed Boukthir",
  description: "Not Found - Mohamed Boukthir",
};

export default function FourZeroFour() {
  return (
    <SectionContainer>
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&apos;t find this page.
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Button>
          <Link href="/">Back to Home &rarr;</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
