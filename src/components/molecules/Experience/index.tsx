import type {HTMLAttributes } from 'react'
import { Flex, Image, Text } from '../../atoms'

type Props = {} & HTMLAttributes<HTMLDivElement>

export function Experience({}: Props) {
  return (
    <Flex gap={30} className="p-2">
        <Image 
            w={80} 
            h={80} 
            className="object-contain rounded-md"  
            src="https://picsum.photos/300/300" 
        />
        <Flex direct="column">
            <Text fszize={14} type="span" className="mb-2">
                Feb 2017 - current
            </Text>
            <Text 
                fszize={18} type="h5" className="font-bold"
            >
                    Front-end developer
            </Text>
            <Text className="mt-4 text-blue-400 text-left">
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
            </Text>
        </Flex>
    </Flex>
  )
}

export default Experience