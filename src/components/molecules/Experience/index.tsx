import type {HTMLAttributes } from 'react'
import { Flex, Image, Text } from '../../atoms'

type Props = {
    title: string ,
    startDate: string,
    endDate:string ,
    desc: string,
    img: string
} & HTMLAttributes<HTMLDivElement>

export function Experience({
    title,
    startDate,
    endDate,
    desc,
    img,
    ...props
}: Props) {
  return (
    <Flex gap={30} className="p-2" {...props}>
        <Image 
            w={80} 
            h={80} 
            className="object-contain rounded-md"  
            src={img}
        />
        <Flex direct="column">
            <Text fszize={14} type="span" className="mb-2">
                {startDate} - {endDate}
            </Text>
            <Text 
                fszize={18} type="h5" className="font-bold"
            >
                {title}
            </Text>
            <Text className="mt-4 text-blue-400 text-left">
                {desc}
            </Text>
        </Flex>
    </Flex>
  )
}

export default Experience