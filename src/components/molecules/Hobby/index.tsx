import type { HTMLAttributes } from 'react'
import { Flex, Image, Text } from '../../atoms'

type Props = {
    title: string,
    desc: string
} & HTMLAttributes<HTMLDivElement>

export function Hobby({
    title,
    desc,
    className, 
    ...props
}: Props) {
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
                    {title}
            </Text>
            <Text>
               {desc}
            </Text>
        </Flex>
    </Flex>
  )
}

export default Hobby