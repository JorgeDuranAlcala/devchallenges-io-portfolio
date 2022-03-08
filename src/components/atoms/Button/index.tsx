/* import React from 'react' */
import type { ButtonHTMLAttributes } from 'react'
import { joinClasses } from '../../../helpers/join-classes'

type Props = {
    primary?: boolean;
    secondary?: boolean;
}

export const Button = (
    {
        children, 
        primary,
        secondary, 
        className,
        ...rest
    }: Props & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    
    //const Btnclasses = `flex justify-center items-center ${primary ? "bg-sky-500" : "bg-gray-500"} text-white`
    const Btnclasses = `${primary && "btn-primary"} ${secondary && "btn-secondary"} btn flex justify-center items-center`
    const classes = joinClasses(Btnclasses, className)
  
    return (
        <button 
            className={classes}  
            type="button" 
            {...rest}
        >
            {children}
        </button>
  )
}
