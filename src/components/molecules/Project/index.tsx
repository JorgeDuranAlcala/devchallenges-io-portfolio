import { Title, Image, Card, Subtitle, Text, Flex, Button } from '../../atoms';
import type { HTMLAttributes } from 'react'
import { joinClasses } from '../../../helpers/join-classes';

type Props = {
  "preview-img-url": string,
  "demo-url": string,
  codeUrl: string,
  title: string,
  subtitle: string,
  desc: string,
  tags: string[]
} & HTMLAttributes<HTMLDivElement>

export function Project({
  "preview-img-url": previewImgUrl,
  "demo-url": demoUrl,
  title,
  subtitle,
  desc,
  tags = [],
  codeUrl,
  className,
  ...props
}: Props) {
  const classes = joinClasses("p-4 flex flex-col md:flex-row gap-5", className)
  return (
  <Card className={classes} {...props}>
    <Flex flexG={0.4} className="h-[200px]">
        <Image full className="object-cover rounded-md" src={previewImgUrl} loading="lazy" />
    </Flex>
    <Flex direct="column" flexG={0.8} gap={15}>
      <Title>{title}</Title>
      <Flex gap={10}>
        {tags.map( (tag, i) => (
           <Text type="span" key={i}>#{tag}</Text>
        ))}
      </Flex>
      <Subtitle>{subtitle}</Subtitle>
      <Text type="p" className="text-justify">
        {desc} 
      </Text>
      <Flex  align="center" className="w-full" gap={20}>
        <Button
          primary 
          className='py-2 px-6'
          >
          <a href={demoUrl} target="_blank">
            Demo
          </a>
        </Button>
        <Button 
          secondary
          className="py-2 px-6"
        >
          <a href={codeUrl} target="_blank">
            Code
          </a>
        </Button>
      </Flex>
    </Flex>
  </Card>
  )
}

export default Project