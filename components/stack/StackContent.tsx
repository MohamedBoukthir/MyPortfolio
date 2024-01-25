import Image from "next/image";

import { StackContainer } from "./StackContainer";
import { StackLeft } from "./StackLeft";
import { StackRight } from "./StackRight";
import { StackTile } from "./StackTiles";

interface StackContentProps {
    stack: StackTile;
    progress: number;
}

export default function StackContent({stack, progress}: StackContentProps) {

    const { title, description, image } = stack;

  return (
    <StackContainer>
        <StackLeft progress={progress}>
            <div className="text-2xl font-medium md:text-3xl xl:text-4xl">{description}</div>
            <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</span>
        </StackLeft>
        <StackRight progress={progress}>
            <div className="drop-shadow-2xl sm:mt-10 md:mt-24">
                <Image src={image.src} alt={title} width={image.width} height={image.height} />
            </div>
        </StackRight>
    </StackContainer>
  )
}
