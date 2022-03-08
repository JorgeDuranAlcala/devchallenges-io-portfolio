import type { HTMLAttributes } from 'react'

type Props = {} & HTMLAttributes<HTMLDivElement>

function MainLayout({ children }: Props) {
  return (
    <div className="main-layout p-8">
        {children}
    </div>
  )
}

export default MainLayout