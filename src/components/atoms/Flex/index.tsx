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
      flexG,
      wrap,
      ...props
}: FlexProps) {
  return (
    <div style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direct,
        gap,
        flex: flexG,
        flexWrap: wrap
    }}
    {...props}
    >
        {children}
    </div>
  )
}
