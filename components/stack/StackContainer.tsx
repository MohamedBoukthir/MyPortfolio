import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function StackContainer({ children }: Props) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">{children}</div>
  )
}
