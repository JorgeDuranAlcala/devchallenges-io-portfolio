import React from 'react'
import type { HTMLAttributes } from 'react'
import { joinClasses } from '../../../helpers/join-classes'

type Props = {
    type?: "h1" | "h2" | "h3",
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ type = "h1", children, className, ...props }: Props) {

  const el = React.createFactory(type)
  const title_classes = "text-2xl font-bold" 
  const classes = joinClasses(title_classes, className)

  return el({className: classes,  ...props}, children)
}