import { ReactNode } from 'react';

interface TileBackgroundProps {
  children: ReactNode;
}

export function TileBg({ children }: TileBackgroundProps) {
  return (
    <div className="absolute h-full w-full">{children}</div>
  )
}
