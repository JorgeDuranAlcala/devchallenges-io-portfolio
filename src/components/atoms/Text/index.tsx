import React from 'react'
import type { HTMLAttributes } from 'react'

type Props = {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span",
    fszize?: number
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>

export function Text({ 
    type = "p", 
    fszize,
    style,
    children, 
    ...props 
}: Props) {

  const el = React.createFactory(type)

  return el(
      {
          style: {
            fontSize: fszize,
            ...style
          }
        , 
        ...props
      }, 
      children
    )
}