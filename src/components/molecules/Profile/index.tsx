import type {HTMLAttributes } from 'react'
import { FaPhone, FaVoicemail } from "react-icons/fa";
import { Title, Image, Card, Subtitle, Text, Flex } from '../../atoms';

type Props = {} & HTMLAttributes<HTMLDivElement>

export function Profile({}: Props) {
  return (
    <Card flex col gap={15} className="p-4 max-w-[400px]">
        <Image 
            full 
            className="object-cover rounded-md"  
            src="https://picsum.photos/300/300" 
        />
        <Flex direct="column" gap={20}>
            <Title>Billy Pearson</Title>
            <Subtitle>Front-end developer</Subtitle>
            <Flex direct="column" gap={5}>
                <Text type="span" > 
                    <Flex gap={10} align="center" >
                        <FaVoicemail/> billy@example.com
                    </Flex>
                </Text>
                <Text type="span" > 
                    <Flex gap={10} align="center" >
                        <FaPhone/> (+603) 546 624 342
                    </Flex>
                </Text>
            </Flex>
            <Text className="text-left">
                Self motivated developer who is willing to learn and create outstanding UI applications
            </Text>
        </Flex>
    </Card>
  )
}

export default Profile