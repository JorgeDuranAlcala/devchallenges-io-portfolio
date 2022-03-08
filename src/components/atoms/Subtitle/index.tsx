import React from 'react'
import type { HTMLAttributes } from 'react'
import {Text} from '../Text'
import { joinClasses } from '../../../helpers/join-classes'

type Props = {
    
} & HTMLAttributes<HTMLHeadingElement>

export function Subtitle({ children, className, ...props }: Props) {

    const subtitle_classes = "text-base font-normal"
    const classes = joinClasses(subtitle_classes, className)

    return <Text 
                type="h4" 
                className={classes}
                {...props} 
            >
                {children}
            </Text>
}