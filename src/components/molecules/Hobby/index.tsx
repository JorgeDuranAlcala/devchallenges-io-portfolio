import type { HTMLAttributes } from 'react'
import { Flex, Image, Text } from '../../atoms'

type Props = {} & HTMLAttributes<HTMLDivElement>

export function Hobby({className, ...props}: Props) {
  return (
    <Flex direct="column" gap={30} className="p-2" {...props}>
        <Image 
            full
            className="object-cover rounded-md h-[140px]"  
            src="https://picsum.photos/320/320" 
        />
        <Flex direct="column" gap={10}>
            <Text 
                fszize={18} type="h5" className="font-bold"
            >
                    Gaming
            </Text>
            <Text>
                Quisque feugiat malesuada molestie.
            </Text>
        </Flex>
    </Flex>
  )
}

export default Hobby