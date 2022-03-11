import type { CSSProperties, HTMLAttributes } from 'react'

export type FlexProps = {
    justify?: string,
    direct?: /* "row" | "row-reverse" | "column" | "column-reverse" */ CSSProperties['flexDirection'],
    align?: string,
    gap?: number | string,
    wrap?: CSSProperties['flexWrap'],
    flexG?: CSSProperties['flex']
} & HTMLAttributes<HTMLDivElement>

export function Flex({
      justify = "start",
      align = "start",
      direct = "row",
      gap = 0,
      children,
      wrap,
      flexG,
      ...props
}: FlexProps) {
  return (
    <div style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direct,
        gap,
        flexWrap: wrap,
        flex: flexG
    }}
    {...props}
    >
        {children}
    </div>
  )
}
