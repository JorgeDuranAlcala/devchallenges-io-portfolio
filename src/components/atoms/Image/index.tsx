import type { ImgHTMLAttributes } from 'react'
import { joinClasses } from '../../../helpers/join-classes'

type Props = {
    w?: number,
    h?: number,
    full?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export function Image({ 
    w,
    h,
    full,
    className,
    ...props
 }: Props) {
  const classes = joinClasses(`${full && "w-full h-full"}`, className)
  return (
    <img 
        width={w} 
        height={h} 
        className={classes} 
        {...props} 
    />
  )
}