import type { HTMLAttributes } from 'react';
import { joinClasses } from '../../../helpers/join-classes';
import { Flex, FlexProps  } from '../Flex'

type Props = {
    col?: boolean;
    flex?: boolean;
} & FlexProps & HTMLAttributes<HTMLDivElement>

export function Card({ flex, col, className, children, ...props }: Props) {
  const classes = joinClasses("card", className)
  return flex 
    ?
   ( 
        <Flex className={classes} direct={col ? "column" : "row"} {...props}>
            {children}
        </Flex> 
    )
    : (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

